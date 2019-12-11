type player = Red | Black

type square = player option

type position = int * int

type state

exception Invalid_pos

(** [size] is the size of a checkerboard. *)
val size : int

(** [new_game] is the state that represents a new game of checkers. *)
val new_game : state

(** [get_player t] is the player who's turn it is in state [t]. *)
val get_player : state -> player

(** [get_square t pos] is the square located at position [pos] in state [t].
    Raises Invalid_Pos if [pos] is not a valid position. *)
val get_square : state -> position -> square

(** [set_square t pos sq] is the state [t] with the square located at position
    [pos] set to [sq].
    Raises Invalid_Pos if [pos] is not a valid position. *)
val set_square : state -> position -> square -> state

(** [winner t] is None if the game is not over. Otherwise, it is an option
    containing the player that won. *)
val winner : state -> player option

(** [valid_move t pos1 pos2] is true iff moving the checker piece
    located at position [pos1] to position [pos2] is a valid move
    according to the rules of checkers. *)
val valid_move : state -> position -> position -> bool

(** [move t pos1 pos2] is the state [t] after moving the checker piece in [pos1]
    to [pos2], removing all appropriate checker pieces in the process. *)
val move : state -> position -> position -> state

(** [to_string t] is a string representation of the state [t]. *)
val to_string : state -> string

(** [print_game t] prints a string representation of the state [t] to 
    the console. *)
val print_game : state -> unit