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


