let inet = Unix.PF_INET
let sost = Unix.SOCK_STREAM

let sock_one = Unix.socket inet sost 0

let n1 = Unix.gethostname ()
let byname = Unix.gethostbyname n1
let my_addr = byname.Unix.h_addr_list.(0)



