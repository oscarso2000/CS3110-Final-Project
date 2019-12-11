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

let size = 10

let mines = size * size / 10

let game_result t : result =
  let uncovered_mines = 
    t |> List.filter (fun (a,c) -> a = Uncovered && c = Mine) |> List.length
  in

  let hidden_numbers =
    t |> List.filter (fun (a,c) -> a <> Uncovered && c <> Mine) |> List.length
  in

  if uncovered_mines > 0 then Lose else
  if hidden_numbers = 0 then Win else Incomplete

let get_box t (x,y) : box =
  if x >= size || y >= size then raise Invalid_pos else
    let index = size * x + y in 
    try List.nth t index with
    | _ -> raise Invalid_pos

let rec set_box t (x,y) b : state =
  if x >= size || y >= size then t else

    let index = size * x + y in
    let rec update_boxes acc counter = function
      | [] -> acc
      | x::y -> update_boxes (acc@[if counter <> index then x else b]) 
                  (counter + 1) y
    in

    update_boxes [] 0 t

(** [initialize_game ()] is a deterministically initialized state of 
    minesweeper. *)
let initialize_game () : state =
  let boxes = size * size in

  let rec generate_mines acc = 
    if acc |> List.length = mines then acc else
      (Random.int boxes)::acc |> List.sort_uniq compare |> generate_mines
  in

  let rec generate_empty_boxes acc =
    if acc |> List.length = boxes then acc else
      (Hidden,(Number 0))::acc |> generate_empty_boxes
  in

  let number_neighbors t' (x,y) =
    [(x+1,y);(x-1,y);(x,y+1);(x,y-1);(x+1,y+1);(x+1,y-1);(x-1,y+1);(x-1,y-1);]
    (* remove invalid coordinates *)
    |> List.filter (fun (x,y) -> x >= 0 && x < size &&
                                 y >= 0 && y < size)
    (* remove boxes that have mines *)
    |> List.filter (fun (x,y) -> get_box t' (x,y) |> snd <> Mine)
  in

  let rec update_numbers t' = function
    | [] -> t'
    | (x,y)::rem -> 
      begin
        let b' = match get_box t' (x,y) with
          | a, Number n -> a, Number (n+1)
          | box -> box (* unreachable case *)
        in 
        update_numbers (set_box t' (x,y) b') rem
      end
  in

  let rec add_mines t = function
    | [] -> t
    | i::rem -> begin
        let x = i / size in
        let y = i mod size in
        let t_mine = add_mines (set_box t (x,y) (Hidden,Mine)) rem in
        update_numbers t_mine (number_neighbors t_mine (x,y))
      end
  in

  let empty_grid = generate_empty_boxes [] in
  let mines = generate_mines [] in
  add_mines empty_grid mines

let new_game () : state =
  Random.self_init ();
  initialize_game ()

let seed_new_game seed : state =
  Random.init seed;
  initialize_game ()

let flag t (x,y) : state =
  if game_result t <> Incomplete then t else
    let app, contents = get_box t (x,y) in
    let box = 
      (if app = Flag then Hidden else if app <> Uncovered then Flag else app), 
      contents in
    set_box t (x,y) box

let uncover t (x,y) : state =
  if game_result t <> Incomplete then t else
    let _, contents = get_box t (x,y) in
    let box = Uncovered, contents in
    set_box t (x,y) box

let to_string t =
  let rec first_row acc counter =
    if counter = size then acc ^ "\n" else 
      first_row (acc ^ (string_of_int counter) ^ "  ") (counter + 1)
  in 

  let rec grid_str acc counter =
    if counter = size * size then acc ^ "\n" else
      let suffix = if counter mod size = size - 1 then "\n" else "" in
      let prefix = if counter mod size <> 0 then "" else
          (counter/size |> string_of_int) ^ " " in
      let str = match List.nth t counter with
        | Hidden, _ -> "[ ]"
        | Flag, _ -> "[!]"
        | Uncovered, Number n -> "[" ^ string_of_int n ^ "]"
        | Uncovered, Mine -> "[X]"
      in grid_str (acc ^ prefix ^ str ^ suffix) (counter + 1)
  in 

  let state_str = 
    match game_result t with
    | Win -> "You won!"
    | Lose -> "You lost!"
    | Incomplete -> ""
  in

  (first_row "   " 0) ^ (grid_str "" 0) ^ state_str

let print_game t =
  t |> to_string |> print_string 