open Gface

(**[widget] is the abstract type representing an object in the graphics window
   [repaint gc] is the graphical context gc redrawn with the desired widget
   [size ()] is the dimensions of the widget*)
type widget = {
  repaint : gctx -> unit;
  size : unit -> (int*int);
}

(**[space (a,b)] is blank widget of width [a] and height [b] *)
let space (a,b) =
  {
    repaint = (fun _ -> ());
    size = (fun _ -> (a,b));
  }


(**[label str] is a widget is a widget containing the string [str] *)
let label str =
  {
    repaint = (fun gc -> draw_string gc (get_pos gc) str);
    size = (fun () -> Graphics.text_size str);
  }

(**[border w] is the widget [w] with a 1 pixel thick border drawn around it *)
let border (w : widget) = 
  {
    repaint = (fun gc -> 
        let (wi,h) = w.size () in 
        let _ = draw_line gc (0,0) (wi+3,0) in
        let _ = draw_line gc (0,0) (0,h+3) in
        let _ = draw_line gc (wi+3,0) (wi+3,h+3) in
        let _ = draw_line gc (0,h+3) (wi+3,h+3) in
        let gc2 = translate gc (2,2) in w.repaint gc2);

    size = (fun () -> let (w,h) = w.size () in (w+4,h+4));
  }

(**[hpair w1 w2] is a new widget that places [w1] and [w2] next to each other
   horizontally and at the same y position on screen *)
let hpair w1 w2  = 
  {
    repaint = (fun gc -> 
        let _ = w1.repaint gc in 
        let g2 = translate gc (w1.size ()) in 
        w2.repaint g2);

    size = (fun _ -> 
        let (x1,y1) = w1.size () in 
        let (x2,y2) = w2.size () in 
        (x1 + x2, max y1 y2))
  }