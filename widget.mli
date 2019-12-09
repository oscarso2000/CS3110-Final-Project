open Gface

(**[widget] is the abstract type representing an object in the graphics window
   [repaint gc] is the graphical context gc redrawn with the desired widget
   [size ()] is the dimensions of the widget*)
type widget =
  {
    repaint : gctx -> unit;
    size : unit -> (int*int);
  }

(**[hpair w1 w2] is a new widget that places [w1] and [w2] next to each other
   horizontally and at the same y position on screen *)
val hpair : widget -> widget -> widget
(**[space (a,b)] is blank widget of width [a] and height [b] *)
val space : int * int -> widget
(**[label str] is a widget is a widget containing the string [str] *)
val label : string -> widget
(**[border w] is the widget [w] with a 1 pixel thick border drawn around it *)
val border : widget -> widget