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




type pos = int * int






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

let translate gc (dx,dy) = 
  {gc with x = gc.x + dx; y = gc.y + dy}

(**[to_ocaml_coords gc (a,b)] is the global coordinates of the local widget
    coordinates [(a,b)] relative to the graphical context [gc] *)
let to_ocaml_coords gc (a,b) = 
  (gc.x + a, Graphics.size_y() -(gc.y+b))

(**[to_loca_coords gc (a,b)] is the widget-local coordinates of the global
   coordinates [(a,b)] relative to the graphical context [gc] *)
let to_local_coords gc (a,b) =
  (a - gc.x, (Graphics.size_y() - b) - gc.y)

(**[draw_string gc pos str] writes the string [str] in the widget-local
    coordinates [pos] relative to the graphical context [gc] *)
let draw_string gc pos str = 
  use_gc gc;
  let (_,h) = Graphics.text_size str in
  let (x,y) = to_ocaml_coords gc pos in 
  Graphics.moveto x (y-h);
  Graphics.draw_string str

(**[draw_line gc p1 p2] draws a line connecting the widget-local positions
   [p1] and [p2] converted to global coordinates*)
let draw_line gc p1 p2 = 
  use_gc gc;
  let (x1,y1) = to_ocaml_coords gc p1 in
  let (x2,y2) = to_ocaml_coords gc p2 in 
  Graphics.moveto x1 y1;
  Graphics.lineto x2 y2


