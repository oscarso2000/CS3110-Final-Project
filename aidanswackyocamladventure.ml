let inet = Unix.PF_INET
let sost = Unix.SOCK_STREAM

let sock_one = Unix.socket inet sost 0

let n1 = Unix.gethostname ()
let byname = Unix.gethostbyname n1
let my_addr = byname.Unix.h_addr_list.(0)

let x = Unix.bind sock_one (Unix.ADDR_INET(my_addr,12345))
let rights_list = [Unix.O_RDWR;Unix.O_APPEND;Unix.O_CREAT; Unix.O_TRUNC] 
let test_file = Unix.openfile "test1" rights_list 0o644 
let words = "hello world" 

let write_to_file fl (str:string) = 
  let n = Unix.write test_file (Bytes.of_string str) 0 (String.length str)
  in Printf.printf "We wrote %s to the file\n" (str)


let read_from_file fl = 
  let str = String.make 20 '.' in
  let n = Unix.read fl (Bytes.of_string str) 2 10 in 
  Printf.printf "We and got the string %s\n" str

let explode s =
  let rec exp i l =
    if i < 0 then l else exp (i - 1) (s.[i] :: l) in
  exp (String.length s - 1) []

let implode l =
  let res = String.create (List.length l) in
  let rec imp i = function
    | [] -> res
    | c :: l -> res.[i] <- c; imp (i + 1) l in
  imp 0 l

let to_ascii_add_0 ch = 
  (Int.to_string (Char.code ch)) ^ "0"

let rec str_map f = function
  | []-> ""
  | h::t -> (f h) ^ (str_map f t)


let encrpyt_file_write fl (str:string) = 
  let int_str = int_of_string (str_map to_ascii_add_0 (explode str)) = 1


