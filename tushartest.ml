

(* Creates a TCP/IP socket *)
let socket1 = Unix.socket Unix.PF_INET Unix.SOCK_STREAM 0
let socket2 = Unix.socket Unix.PF_INET Unix.SOCK_STREAM 0

(*TODO: figure out what this does*)
let my_name = Unix.gethostname ()
let my_entry_byname = Unix.gethostbyname my_name
let my_addr = my_entry_byname.Unix.h_addr_list.(0)

(* Connect the sockets together *)
let connect_sockets = 

  let connect_socket1 =
    Unix.bind socket1 (Unix.ADDR_INET(my_addr, 12345));
    Unix.listen socket1 1;
    Unix.accept socket1
  in 
  Unix.bind socket2 (Unix.ADDR_INET(my_addr, 12346));
  Unix.connect socket2 (snd connect_socket1);

  print_string "Done"

let () = connect_sockets
