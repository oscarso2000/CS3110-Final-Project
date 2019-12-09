

(**abstract type of a graphics context*)
type gctx 

(**abtrasct type of creation options for graphical contexts*)
type opt_val


(**[get_back_col gc] is the background color of the graphics context [gc] *)
val get_back_col : gctx -> Graphics.color
(**[get_fore_col gc] is the foreground color of the graphics context [gc] *)
val get_fore_col : gctx -> Graphics.color
(**[get_font gc] is the font of the graphics context [gc] *)
val get_font : gctx -> string
(**[get_font_size gc] is the font_size of the graphics context [gc]*)
val get_font_size : gctx -> int
(**[get_lw gc] is the line width of the graphics context [gc] *)
val get_lw : gctx -> int
(**[get_pos gc] is the (x,y) coordinate of the top left corner of [gc] *)
val get_pos : gctx -> int*int

(**[set_back_col gc col] sets the background color of [gc] to [col] *)
val set_back_col : gctx -> Graphics.color -> gctx
(**[set_fore_col gc col] sets the foreground color of [gc] to [col] *)
val set_fore_col : gctx -> Graphics.color -> gctx
(**[set_font gc font] sets the font color of [gc] to [font] *)
val set_font : gctx -> string -> gctx
(**[set_font_size gc size] sets the font size of [gc] to [size] *)
val set_font_size : gctx -> int -> gctx
(**[set_lw gc lw] sets the line width of [gc] to [lw] *)
val set_lw : gctx -> int -> gctx
(**[set_back_col gc (a,b)] sets the position of [gc] to [(a,b)] *)
val set_pos : gctx -> int*int -> gctx

(**[use_gc gc] applies the data within gc to the graphical window *)
val use_gc : gctx -> unit

(*
val get_int : ('a * opt_val) list -> 'a -> int -> int
val get_bool : ('a * opt_val) list -> 'a -> bool -> bool
val get_string : ('a * opt_val) list -> 'a -> string -> string
val get_color: ('a * opt_val) list -> 'a -> Graphics.color -> Graphics.color*)



(**widget relative positionz *)

type pos = int * int
type dim = int * int

val to_ocaml_coords : gctx -> int * int -> int * int
val to_local_coords : gctx -> int * int -> int * int

val draw_string : gctx -> pos -> string -> unit
val draw_line : gctx -> pos -> pos -> unit

(*
(** top-level gtaphics context*)
val top_level : gctx
*)

(**[translate gc (a,b)] is a new graphics con*)
val translate : gctx -> int * int -> gctx