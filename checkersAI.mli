open Checkers

type move = Checkers.position * Checkers.position

(** [piece_moves t pos] is a list of positions that a checker piece located at
    position [pos] can move to, regardless of who the active player is.
    Requires: [pos] is a valid position. *)
val piece_moves : Checkers.state -> Checkers.position -> Checkers.position list

(** [valid_moves t] is all the possile moves given state [t]. *)
val valid_moves : Checkers.state -> move list

(** [evaluate_state t] quantifies how desirable the state [t] is for the 
    active player. *)
val evaluate_state : Checkers.state -> int

(** [evaluate_move t m] quantifies how desirable the state [t] is for the 
    active player if they make the move [m] using [evaluate_state]. *)
val evaluate_move : Checkers.state -> move -> int

(** [next_states t] is a list of all the next possible valid states from [t]. *)
val next_states : Checkers.state -> Checkers.state list

(** [maximize states] is the state with the maximal evaluation of [states]. *)
val maximize : Checkers.state list -> Checkers.state

(** [minimize states] is the state with the minimal evaluation of [states]. *)
val minimize : Checkers.state list -> Checkers.state

(** [minimax t depth] is the best move as calculated by [evaluate_move] using
    the minimax algorithm with a search tree depth of [depth]. *)
val minimax : Checkers.state -> int -> move

(** [next_move t] is the move that the AI determines to take if it is the
    active player in state [t]. *)
val next_move : Checkers.state -> move