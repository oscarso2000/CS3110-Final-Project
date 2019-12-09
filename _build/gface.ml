open Graphics

type gctx = {
  mutable backcol : Graphics.color;
  mutable forecol : Graphics.color;
  mutable font : string;
  mutable font_size : int;
  mutable lw : int;
  mutable x : int;
  mutable y : int;
}

let get_back_col gc = gc.backcol
let get_fore_col gc = gc.forecol
let get_font gc = gc.font
let get_font_size gc = gc.font_size
let get_lw gc = gc.lw
let get_pos gc = (gc.x, gc.y)

let set_back_col gc col = gc.backcol <- col
let set_fore_col gc col = gc.forecol <- col
let set_font gc font = gc.font <- font
let set_font_size gc ftsz = gc.font_size <- ftsz
let set_lw gc lw = gc.lw <- lw
let set_pos gc (a,b) = gc.x <- a; gc.y <-b

let use_gc gc =
  Graphics.set_color (get_fore_col gc);
  Graphics.set_font (get_font gc);
  Graphics.set_text_size (get_font_size gc);
  Graphics.set_line_width (get_lw gc);
  let (x,y) = get_pos gc in Graphics.moveto x y;