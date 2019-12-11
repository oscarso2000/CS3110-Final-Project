open Checkers

type move = Checkers.position * Checkers.position

(** [piece_moves t pos] is a list of positions that a checker piece located at
    position [pos] can move to, regardless of who the active player is. *)
let piece_moves t (x,y) =
  let active_piece = Checkers.get_square t (x,y) in
  if active_piece = None then [] else

    let one_step = 
      [(x+1,y+1);(x-1,y+1);(x+1,y-1);(x-1,y-1);] 
      (* remove invalid positions *)
      |> List.filter (fun (x,y) -> x >= 0 && x < Checkers.size &&
                                   y >= 0 && y < Checkers.size)
      (* keep only empty squares *)
      |> List.filter (fun pos -> Checkers.get_square t pos = None)
    in

    let two_step = 
      [(x+2,y+2);(x-2,y+2);(x+2,y-2);(x-2,y-2);] 
      (* remove invalid positions *)
      |> List.filter (fun (x,y) -> x >= 0 && x < Checkers.size &&
                                   y >= 0 && y < Checkers.size)
      (* keep only empty squares *)
      |> List.filter (fun pos -> Checkers.get_square t pos = None)
      (* keep only jumps over opposing pieces *)
      |> List.filter (fun (x',y') ->  
          let middle_square = Checkers.get_square t ((x' + x)/2, (y' + y)/2) in
          middle_square <> None && middle_square <> active_piece)
    in

    one_step @ two_step

let valid_moves t = 
  let active_player = Checkers.get_player t in

  let rec pos_map acc counter = 
    if counter = Checkers.size * Checkers.size then acc else

  in
  t |> Checkers.get_board |> List

let evaluate t =
  failwith "Unimplemented"

let next_move t =
  failwith "Unimplemented"