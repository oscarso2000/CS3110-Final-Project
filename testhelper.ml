(*This file utilizes some functions in oscartest.ml, changed up in some ways
 *to take in input instead of the mutable list variables, so that testing 
 *will work on these helper functions *)
open Emoji

(** [explode s] takes in a string s and converts it into a char list. *)
let explode s =
  let rec exp i l =
    if i < 0 then l else exp (i - 1) (s.[i] :: l) in
  exp (String.length s - 1) []

(** [split_string s] takes in string s and 
 *   splits it into a string list by spaces *)
let split_string s = 
  s |> String.split_on_char ' ' |> List.filter (fun s -> s <> "")

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

(** [replace_with_underscore_list e] is a function that works on 
 *  the list for underscores to make print_emojis work *)
let replace_with_underscore_list e = 
  let rec repl e acc= 
    match e with 
    | [] -> acc
    | h::t -> repl t [replace_with_underscore_words h]@acc
  in repl e []

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

(** [counting x lst c] is a tail-recursive function that 
 * returns the index of the first element in list lst
 *   that is equal to x where c is the accumulator.  *)
let rec counting x lst c = 
  match lst with
  | [] -> raise(Failure "Not Found")
  | h::t -> if (h=x) then c else counting x t (c+1)

