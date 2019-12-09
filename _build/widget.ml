open Gface

type widget = {
  repaint : Gface.gctx -> unit;
  size : unit -> (int*int);
}

let space (a,b) =
  {
    repaint = (fun _ -> ());
    size = (fun _ -> (a,b));
  }