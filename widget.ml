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

let label str =
  {
    repaint = (fun gc -> Gface.draw_string gc (Gface.get_pos gc) str);
    size = (fun () -> Graphics.text_size str);
  }

let border (w : widget) = 
  {
    repaint = (fun gc -> 
        let (wi,h) = w.size () in 
        let _ = Gface.draw_line gc (0,0) (wi+3,0) in
        let _ = Gface.draw_line gc (0,0) (0,h+3) in
        let _ = Gface.draw_line gc (wi+3,0) (wi+3,h+3) in
        let _ = Gface.draw_line gc (0,h+3) (wi+3,h+3) in
        let gc2 = Gface.translate gc (2,2) in w.repaint gc2);

    size = (fun () -> let (w,h) = w.size () in (w+4,h+4));
  }

let hpair w1 w2  = 
  {
    repaint = (fun gc -> 
        let _ = w1.repaint gc in 
        let g2 = Gface.translate gc (w1.size ()) in 
        w2.repaint g2);

    size = (fun _ -> 
        let (x1,y1) = w1.size () in 
        let (x2,y2) = w2.size () in 
        (x1 + x2, max y1 y2))
  }