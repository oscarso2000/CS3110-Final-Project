
type player = Red | Black

type square = player option

type position = int * int

exception Invalid_pos

(** AF: (p, [s0, s1, s2, ..., sn]) represents a checker board where each 
    [si] is a square and it is player [p]'s turn.
    RI: [n+1] must be a perfect square. *)
type state = player * square list

(** [switch_player p] is the player that is not [p]. *)
let switch_player p = 
  if p = Red then Black else Red

let size = 8

let new_game =
  let rec construct_board acc row = 
    let rec construct_row acc col =
      if col = size then acc else
        let sq = if (row + col) mod 2 = 0 then None else
          if row > 4 then Some Red else
          if row < 3 then Some Black else None
        in construct_row (sq::acc) (col + 1)
    in
    if row = size then acc else 
      construct_board ((construct_row [] 0) @ acc) (row + 1)
  in Red, construct_board [] 0

let get_square t (x, y) : square =
  if x >= size || y >= size then raise Invalid_pos else
    let size = t |> snd |> List.length |> float_of_int |> sqrt |> int_of_float in
    let index = size * x + y in 
    try List.nth (snd t) index with
    | _ -> raise Invalid_pos

let set_square t (x, y) sq : state =
  if x >= size || y >= size then raise Invalid_pos else
    let size = t |> snd |> List.length |> float_of_int |> sqrt |> int_of_float in
    let index = size * x + y in 
    if index >= List.length (snd t) then raise Invalid_pos else
      let rec update_squares acc counter = function
        | [] -> acc
        | x::y -> update_squares (acc@[(if counter = index then sq else x)]) 
                    (counter + 1) y
      in (fst t), update_squares [] 0 (snd t)

let valid_move t (x1, y1) (x2, y2) : bool=
  try
    get_square t (x1, y1) = Some (fst t) && (* pos1 has active player's piece *)
    get_square t (x2, y2) = None && (* pos2 is empty *)

    ((abs (x1 - x2) = 1 && abs (y1 - y2) = 1) || (* valid one-step move *)
     (abs (x1 - x2) = 2 && abs (y1 - y2) = 2 && (* valid two-step move *)
      get_square t ((x1 + x2)/2, (y1 + y2)/2) = Some (t |> fst |> switch_player)))
  with
  | Invalid_pos -> false

let move t (x1, y1) (x2, y2) : state =
  if not (valid_move t (x1, y1) (x2, y2)) then t else
    (* remove checker piece from pos1 *)
    let t' = set_square t (x1, y1) None in
    (* add checker piece to pos2 *)
    let t'' = set_square t' (x2, y2) (Some (fst t')) in
    (* remove jumped piece if applicable *)
    let t''' = if abs (x1 - x2) + abs (y1 - y2) = 2 then t'' else
        set_square t'' ((x1 + x2)/2, (y1 + y2)/2) None
    in t''' |> fst |> switch_player, t''' |> snd

let to_string t =
  let board = t |> snd in

  let rec first_row acc counter =
    if counter = size then acc ^ "\n" else 
      first_row (acc ^ (string_of_int counter) ^ "  ") (counter + 1)
  in 

  let rec board_str acc counter =
    if counter = size * size then acc ^ "\n" else
      let suffix = if counter mod size = size - 1 then "\n" else "" in
      let prefix = if counter mod size <> 0 then "" else
          (counter/8 |> string_of_int) ^ " " in
      let str = match List.nth board counter with
        | Some Red -> "[R]"
        | Some Black -> "[B]"
        | None -> if (counter + counter/8) mod 2 = 0 then "[/]" else "[ ]"
      in board_str (acc ^ prefix ^ str ^ suffix) (counter + 1)
  in

  let turn_str = (if fst t = Red then "RED" else "BLACK") ^ " player's turn." in

  (first_row "   " 0) ^ (board_str "" 0) ^ turn_str

let print_game t =
  t |> to_string |> print_string 