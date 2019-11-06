
run : 
	./messenger

connect : 
	telnet localhost 9000

oscar : messenger
	ocamlfind ocamlopt -package lwt,lwt.unix,logs,str,logs.lwt -linkpkg -o messenger ./oscartest.ml
	./messenger

tushar : messenger
	ocamlfind ocamlopt -package unix -linkpkg -o messenger ./tushartest.ml
	./messenger

download : 
	opam update
	opam upgrade
	opam install lwt logs 