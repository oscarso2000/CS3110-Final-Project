(** [explode s] takes in a string s and converts it into a char list. *)
val explode: string -> char list

(** [split_string s] takes in string s and 
 *   splits it into a string list by spaces *)
 val split_string : string -> string list

(** [replace_with_underscore_words h] is a helper function that takes
 *  in a string and replaces spaces with underscores. *)
 val replace_with_underscore_words : string -> string

(** [replace_with_underscore_list e] is a function that works on 
 *  the list for underscores to make print_emojis work *)
val replace_with_underscore_list : string list -> string list 

(** [text_emoji_handling str] takes in a user text and changes some 
 *  standard symbols into emojis if any. *)
val text_emoji_handling : string -> string 

(** [counting x lst c] is a tail-recursive function that 
 * returns the index of the first element in list lst
 *   that is equal to x where c is the accumulator.  *)
 val counting : 'a -> 'a list -> int -> int