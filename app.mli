(** [explode s] takes in a string s and converts it into a char list. *)
val explode: string -> char list

(** [decryption_stuff encrypted_message] takes in the character encrypted array
 *   and decrypts it with the RSA key when the user reads messages. *)
val decryption_stuff : int list -> string

(** [encrypt_emojis index new_message] encrypts the emoji message sequence
 *   with the RSA keys generated at start of server. *)
val encrypt_emojis : int -> string -> int list

(** [encrypt_emojis index new_message] encrypts the message input by user
 *   with the RSA keys generated at start of server. *)
val encrypt_text : int -> string -> int list

(** [handle_message ic oc msg] takes in input console, output console of Lwt_IO
 *   and message that user typed in and parses it to any commands listed. *)
val handle_message : Lwt_io.input_channel -> 
  Lwt_io.output_channel -> string -> string

(** [handle_checkers ic oc game_state ()] handles the checkers game and sees
 *  if user input for playing is valid or not. *)
val handle_checkers : Lwt_io.input_channel ->
  Lwt_io.output_channel -> Checkers.state -> unit -> unit Lwt.t

(** [handle_minesweeper ic oc game_state ()] handles the minesweeper game 
 *  and sees if user input for playing is valid or not. *)
val handle_minesweeper : Lwt_io.input_channel ->
  Lwt_io.output_channel ->
  (Minesweeper.appearance * Minesweeper.contents) list ->
  unit -> unit Lwt.t

(** [handle_connection ic oc num ()] handles connection to see which state the 
 *  app should be in for the user independently. *)
val handle_connection : Lwt_io.input_channel ->
  Lwt_io.output_channel -> int -> unit -> unit Lwt.t

(** [accept_connection conn] accepts or rejects the connection caused by user *)
val accept_connection : Lwt_unix.file_descr * 'a -> unit Lwt.t

(** [create_socket ()] creates the socket to accept connections *)
val create_socket : unit -> Lwt_unix.file_descr

(** [create_server sock] generates server for the app*)
val create_server : Lwt_unix.file_descr -> unit -> 'a Lwt.t