type result =
  | Win
  | Lose
  | Incomplete

type appearance =
  | Hidden
  | Uncovered
  | Flag

type contents = 
  | Number of int
  | Mine

type box = appearance * contents

type position = int * int

type state

exception Invalid_pos

(** [dimensions] is the dimensions of the grid. *)
val dimensions : int * int

(** [mines] is the number of mines. *)
val mines : int

(** [new_game] is a randomly initialized state of minesweeper. *)
val new_game : state

(** [get_box t pos] is the box located at position [pos] in state [t].
    Raises Invalid_Pos if [pos] is not a valid position. *)
val get_box : state -> position -> box

(** [set_box t pos b] is the state [t] with the box located at position
    [pos] set to [b].
    Raises Invalid_Pos if [pos] is not a valid position. *)
val set_box : state -> position -> box -> state

(** [game_result t] is [Win] if the player has won, [Lose] if the player has
    lost, and [Incomplete] if the game is not finished. *)
val game_result : state -> result

(** [flag t pos] is the state [t] with the box at position [pos] marked as a
    flag if it has not yet been uncovered. *)
val flag : state -> position -> state

(** [uncover t pos] is the state after uncovering the box at position [pos]. *)
val uncover : state -> position -> state

(** [to_string t] converts the state to string for printing in console*)
val to_string: (appearance * contents) list -> string