open Checkers

type move = Checkers.position * Checkers.position

(** [piece_moves t pos] is a list of positions that a checker piece located at
    position [pos] can move to, regardless of who the active player is. *)
val piece_moves : Checkers.state -> Checkers.position -> Checkers.position list

(** [valid_moves t] is all the possile moves given state [t]. *)
val valid_moves : Checkers.state -> move list

(** [evaluate t] quantifies how desirable the state [t] is for the active
    player. *)
val evaluate : Checkers.state -> int

(** [next_move t] is the move that the AI determines to take if it is the
    active player in state [t]. *)
val next_move : Checkers.state -> move