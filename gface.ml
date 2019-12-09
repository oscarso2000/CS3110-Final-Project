open Graphics

type gctx = {
  backcol : Graphics.color;
  forecol : Graphics.color;
  font : string;
  font_size : int;
  lw : int;
  x : int;
  y : int;
}

type opt_val = 
  | Copt of Graphics.color
  | Sopt of string
  | Iopt of int
  | Bopt of bool

type lopt = (string * opt_val) list

exception Optionerror



let get_back_col gc = gc.backcol
let get_fore_col gc = gc.forecol
let get_font gc = gc.font
let get_font_size gc = gc.font_size
let get_lw gc = gc.lw
let get_pos gc = (gc.x, gc.y)

let set_back_col gc col = {gc with backcol = col}
let set_fore_col gc col = {gc with forecol = col}
let set_font gc font = {gc with font = font}
let set_font_size gc ftsz = {gc with font_size = ftsz}
let set_lw gc lw = {gc with lw = lw}
let set_pos gc (a,b) = {gc with x=a; y=b}


let use_gc gc : unit =
  Graphics.set_color (get_fore_col gc);
  Graphics.set_font (get_font gc);
  Graphics.set_text_size (get_font_size gc);
  Graphics.set_line_width (get_lw gc);
  let (x,y) = get_pos gc in Graphics.moveto x y


let to_ocaml_coords gc (a,b) = 
  (gc.x + a, Graphics.size_y() -(gc.y+b))

let to_local_coords gc (a,b) =
  (a - gc.x, (Graphics.size_y() - b) - gc.y)