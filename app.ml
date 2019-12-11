open Lwt
open Str
open Encryption
open Emoji
open Soup
open Lwt.Infix
open Reproduce
open Checkers
open Minesweeper
open CheckersAI

(*Mutable variables that update as user's join and sends messages*)
let messages = ref []
let names = ref [] 
let enc = ref []
let passwords = ref []
let emojis = ref []
let multiplayer = Array.make 10 Checkers.new_game
let mult_count = ref 0

let listen_address = Unix.inet_addr_loopback
let port = 9000
let backlog = 10
let key = Encryption.generate_keys () (* (m,k,ki) *)

(* let e = !emojis in  
   begin
    match e with 
    |[] -> "a" 
    | h::t -> h 
   end *) (*TESTS EMOJI PARSED ONLINE*) 

(** [fst key] takes in the first element of the key triplet of RSA *)
let fst key = 
  match key with 
  | (m,k,ki) -> m

(** [snd key] takes in the second element of the key triplet of RSA *)
let snd key = 
  match key with 
  | (m,k,ki) -> k

(** [thrd key] takes in the third element of the key triplet of RSA *)
let thrd key = 
  match key with 
  | (m,k,ki) -> ki

(** [explode s] takes in a string s and converts it into a char list. *)
let explode s =
  let rec exp i l =
    if i < 0 then l else exp (i - 1) (s.[i] :: l) in
  exp (String.length s - 1) []

(*FOR EMOJIS*)
(** [split_string s] takes in string s and 
 *   splits it into a string list by spaces *)
let split_string s = 
  s |> String.split_on_char ' ' |> List.filter (fun s -> s <> "")

(** [program] web scrapes off emo.html and parses the text descriptions
 * of each emoji and puts it into the emojis list *)
let program =
  (* Cohttp_lwt_unix.Client.get
      ("http://www.unicode.org/emoji/charts/emoji-list.html"
       |> Uri.of_string) >>= fun (_, body) ->
     Cohttp_lwt__Body.to_string body >>= fun html ->
  *)
  let soup = Soup.read_file "./emo.html" |> Soup.parse in
  let just_innards l =
    l |> List.map (fun l -> l |> Soup.trimmed_texts |> String.concat "")
  in
  let descriptions = 
    List.map (fun x -> String.lowercase_ascii x) 
      (Soup.select "tbody > tr > td.name" soup |> 
       Soup.to_list |> just_innards) in 
  let split_description = 
    List.map (fun x -> split_string x) descriptions in 
  let underscore = 
    List.map (fun x -> String.concat "_" x) split_description in 
  emojis := !emojis @ underscore

(** [replace_with_underscore_words h] is a helper function that takes
 *  in a string and replaces spaces with underscores. *)
let rec replace_with_underscore_words h = 
  let exploded = explode h in 
  let rec helper lst acc = 
    match exploded with 
    | [] -> acc
    | h::t -> 
      if h <> ' ' then 
        helper t (acc ^ Char.escaped h) 
      else helper t (acc ^ "_")
  in helper exploded ""

(** [replace_with_underscore_list ()] is a unit function that works on 
 *  the emojis list for underscores to make print_emojis work *)
let replace_with_underscore_list () = 
  let e = !emojis in 
  let rec repl e acc= 
    match e with 
    | [] -> acc
    | h::t -> repl t [replace_with_underscore_words h]@acc
  in repl e []

(** [print_emojis] is a helper function that prints all emojis possible to send
 *   when "emojis" is called from handle_message. *)
let print_emojis =       
  let e = List.rev (!emojis) in 
  let rec helper e str=  
    match e with 
    | [] -> str
    | h::t -> helper t str^h^"\n" 
  in helper e ""

(*Hard Coding Emojis into Messenger for Comparison -> See reproduce.ml*)

(*END EMOJIS*)

(*For debugging purposes*)
let rec print_list = function 
  | [] -> ()
  | e::l -> print_endline e ; print_string " " ; print_list l
(*END*)

(** [text_emoji_handling str] takes in a user text and changes some 
 *  standard symbols into emojis if any. *)
let text_emoji_handling str = 
  let array = Str.split_delim (Str.regexp " ") str in
  let matched = List.map (fun x -> 
      if x = ":)" then Emoji.smiling_face 
      else if x = ";)" then Emoji.winking_face 
      else if x = ":|" then Emoji.neutral_face
      else if x = ":(" then Emoji.disappointed_face
      else if x = "<3" then Emoji.sparkling_heart
      else if x = ":'(" then Emoji.crying_face
      else if x = "</3" then Emoji.broken_heart
      else if x = ":D" then Emoji.grinning_face
      else if x = "(^^^)" then Emoji.shark
      else if x = ":o" || x = ":O" then Emoji.astonished_face
      else if x = ":\\" then Emoji.slightly_frowning_face
      else x) array 
  in 
  String.concat " " matched


let decryption_stuff encrypted_message = 
  let decrypted = List.map (fun x -> Encryption.decrypt 
                               (fst key) (thrd key) x) encrypted_message in 
  let decrypted_message = List.map (fun x -> char_of_int x) decrypted in 
  let string_list = (List.map (String.make 1) decrypted_message) in
  let combined = String.concat "" string_list in 
  let index_of_space = String.index combined ' ' + 1 in 
  if try String.sub combined (index_of_space) 5 = "Emoji" with _ -> false 
  then let new_combined = String.sub combined (index_of_space) 
           (String.length combined - index_of_space) in 
    let new_index = String.index new_combined ' ' + 1 in 
    let gotten_emoji = 
      try Reproduce.reproduce_emoji 
            (String.sub new_combined (new_index) 
               (String.length new_combined - index_of_space + 1)) 
      with _ -> Emoji.question_mark in 
    String.sub combined 0 (index_of_space - 1) ^ " " ^ gotten_emoji
  else
    text_emoji_handling combined

let encrypt_emojis index new_message = 
  let user = List.nth !names (index-1) in
  let final_message =  user ^ ": Emoji " ^ new_message in
  let helper_message = string_of_int index ^ ": Emoji" ^ new_message in
  let exploded = explode final_message in
  let exploded_ascii = List.map (fun x -> Char.code x) exploded in
  messages := !messages @ [helper_message];
  List.map (fun x -> Encryption.encrypt 
               (fst key) (snd key) x) exploded_ascii

let encrypt_text index msg =
  let new_message_with_send = 
    Str.string_after msg ((String.index (msg ^ " ") ' ') + 1) in 
  let new_message = Str.string_after new_message_with_send 
      ((String.index (new_message_with_send ^ " ") ' ') + 1) in
  let user = List.nth !names (index-1) in
  let final_message =  user ^ ": " ^ new_message in
  let helper_message = string_of_int index ^ ": " ^ new_message in
  let exploded = explode final_message in
  let exploded_ascii = List.map (fun x -> Char.code x) exploded in
  messages := !messages @ [helper_message];
  List.map (fun x -> Encryption.encrypt (fst key) (snd key) x) exploded_ascii

(** [counting x lst c] is a tail-recursive function that 
 * returns the index of the first element in list lst
 *   that is equal to x where c is the accumulator.  *)
let rec counting x lst c = 
  match lst with
  | [] -> raise(Failure "Not Found")
  | h::t -> if (h=x) then c else counting x t (c+1)


let rec handle_message input_console output_console msg =
  let arrays = Str.split_delim (Str.regexp " ") msg in
  if List.length arrays = 1 then
    match String.lowercase_ascii(List.hd arrays) with
    | "emojis" -> print_emojis
    | "checkers" -> "Starting Checkers..."
    | "minesweeper" -> "Starting Minesweeper..."
    | "ai" -> "Starting AI Checkers..."
    | "read" -> 
      if List.length !enc = 0 then
        "No Messages Yet"
      else
        let new_string = ref "" in  
        let iterator () = 
          for variable = 0 to List.length !enc - 1 do
            let encrypted_message = List.nth !enc (variable) in 
            new_string := !new_string ^ 
                          decryption_stuff encrypted_message ^ "\n"
          done
        in 
        iterator (); !new_string
    | "recent" -> 
      if List.length !enc = 0 then
        "No Messages Yet"
      else
        let encrypted_message = List.nth !enc (List.length !enc -1) in 
        decryption_stuff encrypted_message ^ "\n"
    (* old: !messages *)
    | _ -> "Unknown command"
  else
    match arrays with
    | h::"emoji"::t when  List.length arrays = 3 ->   
      let index = 
        try 
          int_of_string (String.sub (h) 0 (String.length h - 1))
        with _ -> int_of_string (String.sub (h) 0 (String.length h)) in
      if try List.length !names < index  with _ -> true 
      then "Error: User not Found. Remember to use the right number." else
        let new_message_with_emoji = 
          Str.string_after msg ((String.index (msg ^ " ") ' ') + 1) in 
        let new_message = Str.string_after new_message_with_emoji 
            ((String.index (new_message_with_emoji ^ " ") ' ') + 1) in
        if try (List.find (fun x -> x = new_message) !emojis) = new_message
          with Not_found -> false then
          let encrypted_explode = encrypt_emojis index new_message in
          enc := !enc @ [encrypted_explode];
          "Please Enter Password Below"
        else 
          "Emoji Does Not Exist. Did you remember the underscore?"
    | h::"emoji"::t when  List.length arrays > 3 -> 
      "Please send one emoji at a time."
    | h::"send"::t when  List.length arrays > 2 ->   
      let index = 
        try 
          int_of_string (String.sub (h) 0 (String.length h - 1))
        with _ -> int_of_string (String.sub (h) 0 (String.length h)) in
      if try List.length !names < index  with _ -> true 
      then "Error: User not Found. Remember to use the right number." else
        let encrypted_explode = encrypt_text index msg in 
        enc := !enc @ [encrypted_explode];
        "Please Enter Password Below"
    | _      -> "Unknown command"


and handle_checkers input_console output_console game_state () = 
  (Lwt_io.write_line output_console ("\nExample Input: `move 5 2 to 3 1`");
   Lwt_io.write_line output_console ("Type `close` to close game");
   let t = game_state in 
   Lwt_io.write_line output_console (t |> Checkers.to_string);
   Lwt_io.read_line_opt input_console >>= 
   (fun input -> 
      match input with
      | Some i when i = "close" ->
        (Lwt_io.write_line output_console ("Closing Checkers..."); 
         handle_connection input_console output_console 2 ())
      | Some i when i <> "" -> 
        let arrays = Str.split_delim (Str.regexp " ") (String.trim i) in
        if List.length arrays = 6 then 
          begin
            if List.nth arrays 0 = "move" && List.nth arrays 3 = "to" then 
              try 
                let a1 = int_of_string (List.nth arrays 1) in 
                let a2 = int_of_string (List.nth arrays 2) in 
                let b1 = int_of_string (List.nth arrays 4) in 
                let b2 = int_of_string (List.nth arrays 5) in 
                let new_t = Checkers.move t (a1,a2) (b1,b2) in 
                handle_checkers input_console output_console new_t ()
              with _ -> 
                (Lwt_io.write_line output_console ("Invalid Input");
                 handle_checkers input_console output_console t ())
            else
              ( Lwt_io.write_line output_console ("Invalid Input");
                handle_checkers input_console output_console t ())
          end
        else
          (Lwt_io.write_line output_console ("Invalid Input"); 
           handle_checkers input_console output_console t ())
      | Some _ -> (Lwt_io.write_line output_console ("Invalid Input");
                   Logs_lwt.info (fun m -> m "Nothing happened") 
                   >>= handle_checkers input_console output_console t)
      | None -> (Logs_lwt.info (fun m -> m "Connection closed") 
                 >>= return)))


and handle_minesweeper input_console output_console game_state () = 
  (Lwt_io.write_line output_console ("\nExample Input: `uncover 5 2`");
   Lwt_io.write_line output_console ("Toggle Flag: `flag 5 2`");
   Lwt_io.write_line output_console ("Type `close` to close game");
   let t = game_state in 
   Lwt_io.write_line output_console (t |> Minesweeper.to_string);
   Lwt_io.read_line_opt input_console >>= 
   (fun input -> 
      match input with
      | Some i when i = "close" ->
        (Lwt_io.write_line output_console ("Closing Minesweeper..."); 
         handle_connection input_console output_console 2 ())
      | Some i when i <> "" -> 
        let arrays = Str.split_delim (Str.regexp " ") (String.trim i) in
        if List.length arrays = 3 then 
          begin
            if List.nth arrays 0 = "uncover" then 
              try 
                let a1 = int_of_string (List.nth arrays 1) in 
                let a2 = int_of_string (List.nth arrays 2) in 
                let new_t = Minesweeper.uncover t (a1,a2) in 
                handle_minesweeper input_console output_console new_t ()
              with _ -> 
                (Lwt_io.write_line output_console ("Invalid Input");
                 handle_minesweeper input_console output_console t ())
            else if List.nth arrays 0 = "flag" then 
              try 
                let a1 = int_of_string (List.nth arrays 1) in 
                let a2 = int_of_string (List.nth arrays 2) in 
                let new_t = Minesweeper.flag t (a1,a2) in 
                handle_minesweeper input_console output_console new_t ()
              with _ -> 
                (Lwt_io.write_line output_console ("Invalid Input");
                 handle_minesweeper input_console output_console t ())
            else
              ( Lwt_io.write_line output_console ("Invalid Input");
                handle_minesweeper input_console output_console t ())
          end
        else
          (Lwt_io.write_line output_console ("Invalid Input"); 
           handle_minesweeper input_console output_console t ())
      | Some _ -> (Lwt_io.write_line output_console ("Invalid Input");
                   Logs_lwt.info (fun m -> m "Nothing happened") 
                   >>= handle_minesweeper input_console output_console t)
      | None -> (Logs_lwt.info (fun m -> m "Connection closed") 
                 >>= return)))


and handle_multiplayer input_console output_console game_state num player () = 
  let pl = player mod 2 in 
  while pl = 1 && Checkers.get_player multiplayer.(num-1) <> Checkers.Red do
    ();
  done;
  (* handle_multiplayer input_console output_console multiplayer.(num-1) num player () *)
  while pl = 0 && Checkers.get_player multiplayer.(num-1) <> Checkers.Black do
    (* handle_multiplayer input_console output_console multiplayer.(num-1) num player () *)
    ();
  done;
  (Lwt_io.write_line output_console ("\nExample Input: `move 5 2 to 3 1`");
   Lwt_io.write_line output_console ("Type `close` to close game");
   let t = game_state in 
   Lwt_io.write_line output_console (t |> Checkers.to_string);
   Lwt_io.read_line_opt input_console >>= 
   (fun input -> 
      match input with
      | Some i when i = "close" ->
        (Lwt_io.write_line output_console ("Closing Checkers..."); 
         handle_connection input_console output_console 2 ())
      | Some i when i <> "" -> 
        let arrays = Str.split_delim (Str.regexp " ") (String.trim i) in
        if List.length arrays = 6 then 
          begin
            if List.nth arrays 0 = "move" && List.nth arrays 3 = "to" then 
              try 
                let a1 = int_of_string (List.nth arrays 1) in 
                let a2 = int_of_string (List.nth arrays 2) in 
                let b1 = int_of_string (List.nth arrays 4) in 
                let b2 = int_of_string (List.nth arrays 5) in 
                let new_t = Checkers.move t (a1,a2) (b1,b2) in 
                multiplayer.(num - 1) <- new_t;
                Lwt_io.write_line output_console (t |> Checkers.to_string);
                Lwt_io.write_line output_console ("Please Wait...") >>= 
                handle_multiplayer input_console output_console multiplayer.(num-1) num player
              with _ -> 
                (Lwt_io.write_line output_console ("Invalid Input");
                 handle_multiplayer input_console output_console t num player ())
            else
              ( Lwt_io.write_line output_console ("Invalid Input");
                handle_multiplayer input_console output_console t num player ())
          end
        else
          (Lwt_io.write_line output_console ("Invalid Input"); 
           handle_multiplayer input_console output_console t num player ())
      | Some _ -> (Lwt_io.write_line output_console ("Invalid Input");
                   Logs_lwt.info (fun m -> m "Nothing happened") 
                   >>= handle_checkers input_console output_console t)
      | None -> (Logs_lwt.info (fun m -> m "Connection closed") 
                 >>= return)))


and handle_checkersAI input_console output_console game_state () = 
  (Lwt_io.write_line output_console ("\nExample Input: `move 5 2 to 3 1`");
   Lwt_io.write_line output_console ("Type `close` to close game");
   let t = game_state in 
   Lwt_io.write_line output_console ("Your turn...");
   Lwt_io.write_line output_console (t |> Checkers.to_string);
   Lwt_io.read_line_opt input_console >>= 
   (fun input -> 
      match input with
      | Some i when i = "close" ->
        (Lwt_io.write_line output_console ("Closing Checkers..."); 
         handle_connection input_console output_console 2 ())
      | Some i when i <> "" -> 
        let arrays = Str.split_delim (Str.regexp " ") (String.trim i) in
        if List.length arrays = 6 then 
          begin
            if List.nth arrays 0 = "move" && List.nth arrays 3 = "to" then 
              try 
                let a1 = int_of_string (List.nth arrays 1) in 
                let a2 = int_of_string (List.nth arrays 2) in 
                let b1 = int_of_string (List.nth arrays 4) in 
                let b2 = int_of_string (List.nth arrays 5) in 
                let new_t = Checkers.move t (a1,a2) (b1,b2) in 
                Lwt_io.write_line output_console ("AI's turn...");
                Lwt_io.write_line output_console ("\n" ^ (new_t |> Checkers.to_string));
                let ((x1,x2),(y1,y2)) = CheckersAI.next_move new_t in 
                let computer_t = Checkers.move new_t (x1,x2) (y1,y2) in
                handle_checkersAI input_console output_console computer_t ()
              with _ -> 
                (Lwt_io.write_line output_console ("Invalid Input");
                 handle_checkersAI input_console output_console t ())
            else
              ( Lwt_io.write_line output_console ("Invalid Input");
                handle_checkersAI input_console output_console t ())
          end
        else
          (Lwt_io.write_line output_console ("Invalid Input"); 
           handle_checkersAI input_console output_console t ())
      | Some _ -> (Lwt_io.write_line output_console ("Invalid Input");
                   Logs_lwt.info (fun m -> m "Nothing happened") 
                   >>= handle_checkers input_console output_console t)
      | None -> (Logs_lwt.info (fun m -> m "Connection closed") 
                 >>= return)))


and handle_connection input_console output_console num () =
  let handle_name name = 
    if List.mem name !names then 
      (Lwt_io.write_line output_console 
         ("This name exists already, do you want to log back in?");
       Lwt_io.read_line_opt input_console >>= 
       (fun response -> 
          match response with 
          | None -> handle_connection input_console output_console 0 ()
          | Some x when x = "yes" -> 
            (Lwt_io.write_line output_console ("Please Enter Password");
             Lwt_io.read_line_opt input_console >>= 
             (fun response ->
                match response with 
                | Some p -> let index = counting name !names 0 in 
                  if p = List.nth !passwords index then 
                    (Lwt_io.write_line output_console 
                       ("Welcome Back " ^ name ^ "!");
                     handle_connection input_console output_console 2 ())
                  else
                    (Lwt_io.write_line output_console ("Wrong Password");
                     handle_connection input_console output_console 0 ())
                | None -> handle_connection input_console output_console 0 ()))
          | Some x -> handle_connection input_console output_console 0 ()))
    else
      (names := !names @ [name];
       Lwt_io.write_line output_console 
         ("Your ID is: " ^ string_of_int (List.length !names));
       handle_connection input_console output_console 1 ();)
  in
  let handle_password password = 
    passwords := !passwords @ [password];
    Lwt_io.write_line output_console ("Your Password is: " ^ password);
    handle_connection input_console output_console 2 ();
  in
  if num = 0 then 
    (Lwt_io.write_line output_console "What is your name: ";
     Lwt_io.read_line_opt input_console >>= 
     (fun name ->
        match name with
        | None -> handle_connection input_console output_console 0 ()
        | Some n -> handle_name n))
  else if num = 1 then 
    (Lwt_io.write_line output_console 
       "Create a password (Please keep it short and simple): "; 
     Lwt_io.read_line_opt input_console >>= 
     (fun password ->
        match password with
        | None -> handle_connection input_console output_console 1 ()
        | Some n -> handle_password n))
  else if num = 2 then 
    (Lwt_io.write_line output_console "What would you like to do? \n";
     Lwt_io.read_line_opt input_console >>=
     (fun msg ->
        match msg with
        | Some msg when msg <> "" -> 
          let reply = handle_message input_console output_console msg in
          if reply = "Please Enter Password Below" then
            Lwt_io.write_line output_console reply >>= 
            handle_connection input_console output_console 3
          else if reply = "Starting Checkers..." then 
            Lwt_io.write_line output_console reply >>= 
            handle_checkers input_console output_console (Checkers.new_game)
          else if reply = "Starting Minesweeper..." then 
            Lwt_io.write_line output_console reply >>=
            handle_minesweeper input_console output_console (Minesweeper.new_game ())
          else if reply = "Starting Multiplayer Checkers..." then 
            (mult_count := !mult_count + 1;
             let num = (!mult_count + 1) / 2 in
             if !mult_count mod 2 = 1 then
               (multiplayer.(num - 1) <- Checkers.new_game;
                let t = multiplayer.(num - 1) in
                Lwt_io.write_line output_console reply;
                Lwt_io.write_line output_console ("You are Red");
                Lwt_io.write_line output_console ("Please Wait...") >>=
                handle_multiplayer input_console output_console (t) num !mult_count)
             else 
               let t = multiplayer.(num - 1) in 
               Lwt_io.write_line output_console reply;
               Lwt_io.write_line output_console ("You are Black"); 
               Lwt_io.write_line output_console ("Please Wait...") >>=
               handle_multiplayer input_console output_console (t) num !mult_count)
          else if reply = "Starting AI Checkers..." then 
            Lwt_io.write_line output_console reply >>= 
            handle_checkersAI input_console output_console (Checkers.new_game)
          else
            Lwt_io.write_line output_console reply >>= 
            handle_connection input_console output_console 2
        | Some _ -> Logs_lwt.info (fun m -> m "Nothing happened") 
          >>= handle_connection input_console output_console 2
        | None -> Logs_lwt.info (fun m -> m "Connection closed") 
          >>= return))
  else
    (Lwt_io.read_line_opt input_console >>= 
     (fun pass ->
        match pass with 
        | Some p ->
          let recent = List.nth (List.rev !messages) 0 in 
          let arrays = Str.split_delim (Str.regexp " ") recent in
          let h = List.nth arrays 0 in
          let index = 
            try 
              int_of_string (String.sub (h) 0 (String.length h - 1))
            with _ -> int_of_string (String.sub (h) 0 (String.length h)) in
          if p = List.nth !passwords (index-1) then 
            let reply = "Message Sent" in 
            Lwt_io.write_line output_console reply >>= 
            handle_connection input_console output_console 2
          else 
            let x = List.rev !enc in 
            begin
              match x with 
              | [] -> handle_connection input_console output_console 2 ()
              | h::t -> 
                enc := (List.rev t); 
                Lwt_io.write_line output_console "Invalid Password" 
                >>= handle_connection input_console output_console 2
            end
        | None -> handle_connection input_console output_console 3 ()
     ))


(* Setting up sockets and connections *)
let accept_connection conn =
  let fd, _ = conn in
  let input_console = Lwt_io.of_fd Lwt_io.Input fd in
  let output_console = Lwt_io.of_fd Lwt_io.Output fd in
  Lwt.on_failure (handle_connection input_console output_console 0 ()) 
    (fun e -> Logs.err (fun m -> m "%s" (Printexc.to_string e)));
  Logs_lwt.info (fun m -> m "New connection") >>= return

let create_socket () =
  let open Lwt_unix in
  let sock = socket PF_INET SOCK_STREAM 0 in
  (bind sock @@ ADDR_INET(listen_address, port);
   listen sock backlog;
   sock)

let create_server sock =
  let rec server () =
    Lwt_unix.accept sock >>= accept_connection >>= server
  in server

(* This function runs the server based in localhost. *)
let () =
  let () = Logs.set_reporter (Logs.format_reporter ()) in
  let () = Logs.set_level (Some Logs.Info) in
  let sock = create_socket () in
  let server = create_server sock in
  Lwt_main.run @@ server ()