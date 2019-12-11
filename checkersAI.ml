open Checkers

type move = Checkers.position * Checkers.position

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

let valid_moves t : move list = 
  let active_player = Checkers.get_player t in
  let active_color = Some active_player in

  let rec pos_map acc counter = 
    if counter = Checkers.size * Checkers.size then acc else
      let x = counter / Checkers.size in
      let y = counter mod Checkers.size in
      pos_map ((x,y)::acc) (counter + 1)
  in

  let pieces = 
    pos_map [] 0 
    |> List.filter (fun pos -> Checkers.get_square t pos = active_color)
  in

  let rec get_moves acc = function
    | [] -> acc
    | pos::y -> 
      begin
        let moves = piece_moves t pos |> List.map(fun pos' -> pos, pos') in
        get_moves (moves @ acc) y
      end
  in get_moves [] pieces

(** [evaluate_state t] is the evaluation function for a state [t].
    Currently this evaluation function simply returns the difference in the
    number of pieces each player has. *)
let evaluate_state t =
  let active_color = Some (Checkers.get_player t) in

  let active_pieces = 
    t |> Checkers.get_board 
    |> List.filter (fun sq -> sq = active_color)
    |> List.length
  in

  let opposing_pieces = 
    t |> Checkers.get_board 
    |> List.filter (fun sq -> sq <> active_color && sq <> None)
    |> List.length
  in

  active_pieces - opposing_pieces

let evaluate_move t m =
  Checkers.move t (fst m) (snd m) |> evaluate_state

(** [next_states t] is all the next possible valid states from [t]. *)
let next_states t = 
  valid_moves t |> List.map (fun (pos1, pos2) -> Checkers.move t pos1 pos2)

let maximize states : Checkers.state =
  states |> List.map (fun st -> st, evaluate_state st) 
  |> List.fold_left (fun (max_state, max_val) (st, v) -> 
      if max_val > v then (max_state, max_val) else (st, v)) 
    (List.nth states 1, min_int)
  |> fst

let minimize states : Checkers.state = 
  states |> List.map (fun st -> st, evaluate_state st) 
  |> List.fold_left (fun (min_state, min_val) (st, v) -> 
      if min_val < v then (min_state, min_val) else (st, v)) 
    (List.nth states 1, max_int)
  |> fst

let rec minimax t depth =
(*
  (* get all next possible states *)
  t |> next_states 
  (* map next states to resulting minimized state after opposing player plays *)
  |> List.map (fun t -> minimize (next_states t))
  *)

  List.nth (valid_moves t) 1

let next_move t =
  let best_state = t |> next_states |> maximize in

  let rec get_move = function
    | [] -> failwith "impossible"
    | (a,b)::y -> 
      begin
        if Checkers.move t a b = best_state then (a,b) else
          get_move y
      end
  in t |> valid_moves |> get_move