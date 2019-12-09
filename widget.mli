
type widget =
  {
    repaint : Gface.gctx -> unit;
    size : unit -> (int*int);
  }


val hpair : widget -> widget -> widget
val space : int * int -> widget
val label : string -> widget
val border : widget -> widget