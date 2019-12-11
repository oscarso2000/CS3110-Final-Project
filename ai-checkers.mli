open Checkers

type move = Checkers.position * Checkers.position

(** [valid_moves t] is all the possile moves given state [t]. *)
val valid_moves : Checkers.state -> move list

(** [evaluate t] quantifies how desirable the state [t] is for the active
    player. *)
val evaluate : Checkers.state -> int

(** [next_move t] is the move that the AI determines to take if it is the
    active player in state [t]. *)
val next_move : Checkers.state -> move