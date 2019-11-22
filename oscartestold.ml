open Lwt
open Str

let messages = ref ""
let names = ref []

let listen_address = Unix.inet_addr_loopback
let port = 9000
let backlog = 10

let handle_message msg =
  let arrays = Str.split_delim (Str.regexp " ") msg in
  if List.length arrays = 1 then
    match String.lowercase_ascii(List.hd arrays) with
    | "read" -> !messages
    | _ -> "Unknown command"
  else
    match arrays with
    | h::"send"::t when  List.length arrays > 2 ->   
      let index = int_of_string
          (String.sub (h) 0 ((String.length h) -1)) in 
      let new_message_with_send = Str.string_after msg ((String.index (msg ^ " ") ' ') + 1) in 
      let new_message = Str.string_after new_message_with_send ((String.index (new_message_with_send ^ " ") ' ') + 1) in
      let user = List.nth !names (index-1) in
      messages := !messages ^ "\n" ^ user ^": "^new_message; "Message Sent \n"
    | _      -> "Unknown command"

let rec handle_connection ic oc num ()=
  let handle_name name = 
    names := !names@ [name];
    Lwt_io.write_line oc ("Your ID is: " ^ string_of_int (List.length !names));
    handle_connection ic oc 1 ();
  in
  if num = 0 then 
    (Lwt_io.write_line oc "What is your name: "; 
     Lwt_io.read_line_opt ic >>= 
     (fun name ->
        match name with
        | None -> handle_connection ic oc 0 ()
        | Some n -> handle_name n))
  else
    Lwt_io.read_line_opt ic >>=
    (fun msg ->
       match msg with
       | Some msg when msg <> "" ->
         let reply = handle_message msg in
         Lwt_io.write_line oc reply >>= handle_connection ic oc 1
       | Some _ -> Logs_lwt.info (fun m -> m "Nothing happened") >>= handle_connection ic oc 1
       | None -> Logs_lwt.info (fun m -> m "Connection closed") >>= return)

let accept_connection conn =
  let fd, _ = conn in
  let ic = Lwt_io.of_fd Lwt_io.Input fd in
  let oc = Lwt_io.of_fd Lwt_io.Output fd in
  Lwt.on_failure (handle_connection ic oc 0 ()) (fun e -> Logs.err (fun m -> m "%s" (Printexc.to_string e) ));
  Logs_lwt.info (fun m -> m "New connection") >>= return

let create_socket () =
  let open Lwt_unix in
  let sock = socket PF_INET SOCK_STREAM 0 in
  (bind sock @@ ADDR_INET(listen_address, port);
   listen sock backlog;
   sock)

let create_server sock =
  let rec serve () =
    Lwt_unix.accept sock >>= accept_connection >>= serve
  in serve

let () =
  let () = Logs.set_reporter (Logs.format_reporter ()) in
  let () = Logs.set_level (Some Logs.Info) in
  let sock = create_socket () in
  let serve = create_server sock in
  Lwt_main.run @@ serve ()