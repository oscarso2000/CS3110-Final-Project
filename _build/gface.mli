

(**abstract type of a graphics context*)
(**should these be mutable? *)
type gctx 

(*getter functions for a graphics context *)
val get_back_col : gctx -> Graphics.color
val get_fore_col : gctx -> Graphics.color
val get_font : gctx -> string
val get_font_size : gctx -> int
val get_lw : gctx -> int
val get_pos : gctx -> int*int

(*setter functions for a graphics context *)
val set_back_col : gctx -> Graphics.color -> unit
val set_fore_col : gctx -> Graphics.color -> unit
val set_font : gctx -> string -> unit
val set_font_size : gctx -> int -> unit
val set_lw : gctx -> int -> unit
val set_pos : gctx -> int*int -> unit

val use_gc : gctx -> unit
(*
(**widget relative positionz *)
type pos = int * int

(** top-level gtaphics context*)
val top_level : gctx

(** display text at given relative position*)
val draw_string :  gctx -> pos -> string -> unit

(**draws a line between two points *)
val draw_line : gctx -> pos -> pos -> unit

(**produces a new gctx shifted by (dx,dy) *)
val translate : gctx -> int * int -> gctx*)