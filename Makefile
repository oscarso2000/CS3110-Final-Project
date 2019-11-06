
run : 
	./messager

connect : 
	telnet localhost 9000

oscar : 
	ocamlfind ocamlopt -package lwt,lwt.unix,logs,str,logs.lwt -linkpkg -o messenger ./oscartest.ml

tushar : tusharmessager
	ocamlfind ocamlopt -package unix -linkpkg -o tusharmessager ./tushartest.ml
