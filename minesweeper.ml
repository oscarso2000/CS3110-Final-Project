open Random

type result =
  | Win
  | Lose
  | Incomplete

type appearance =
  | Hidden
  | Uncovered
  | Flag

type contents = 
  | Number of int
  | Mine

type box = appearance * contents

type position = int * int

type state = box list

exception Invalid_pos

let dimensions = 10, 20

let mines = (fst dimensions) * (snd dimensions) / 10

let get_box t (x,y) : box =
  if x >= fst dimensions || y >= snd dimensions then raise Invalid_pos else
    let index = (fst dimensions) * x + y in 
    try List.nth t index with
    | _ -> raise Invalid_pos

let rec set_box t (x,y) b : state =
  if x >= fst dimensions || y >= snd dimensions then raise Invalid_pos else

    let number_neighbors t' (x,y) =
      [(x+1,y);(x-1,y);(x,y+1);(x,y-1);(x+1,y+1);(x+1,y-1);(x-1,y+1);(x-1,y-1);]
      (* remove invalid coordinates *)
      |> List.filter (fun (x,y) -> x >= 0 && x < fst dimensions &&
                                   y >= 0 && y < snd dimensions)
      (* remove boxes that have mines *)
      |> List.filter (fun (x,y) -> get_box t' (x,y) |> snd <> Mine)
    in

    let rec update_neighbors t' = function
      | [] -> t'
      | (x,y)::rem -> 
        begin
          let b' = match get_box t' (x,y) with
            | a, Number n -> a, Number (n+1)
            | box -> box
          in 
          update_neighbors (set_box t' (x,y) b') rem
        end
    in

    let index = (fst dimensions) * x + y in

    let rec update_boxes acc counter = function
      | [] -> acc
      | x::y -> update_boxes (acc@[if counter <> index then x else b]) 
                  (counter + 1) y
    in

    match b |> snd with
    | Mine -> 
      begin
        let t' = update_boxes [] 0 t in
        let neighbors = number_neighbors t' (x,y) in
        update_neighbors t' neighbors
      end
    | _ -> update_boxes [] 0 t

let new_game : state =
  Random.self_init ();
  let size = (fst dimensions) * (snd dimensions) in

  let rec generate_mines acc = 
    if acc |> List.length = mines then acc else
      (Random.int size)::acc |> List.sort_uniq compare |> generate_mines
  in

  let rec generate_boxes acc =
    if acc |> List.length = size then acc else
      (Number 0)::acc |> generate_boxes
  in

  failwith "Unimplemented"

let game_result t : result =
  failwith "Unimplemented"

let flag t (x,y) : state =
  failwith "Unimplemented"

let uncover t (x,y) : state =
  failwith "Unimplemented"

let to_string t =
  let rec grid_str acc counter =
    if counter = (fst dimensions) * (snd dimensions) then acc ^ "\n" else
      let str = match List.nth t counter with
        | Uncovered, Number n -> ""
        | Uncovered, Mine -> ""
        | Hidden, _ -> ""
        | Flag, _ -> ""
      in ""
  in ""

let print_game t =
  t |> to_string |> print_string 