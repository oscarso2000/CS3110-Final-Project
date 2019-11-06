
run : 
	./messenger

connect : 
	telnet localhost 9000

oscar : messenger
	ocamlfind ocamlopt -package lwt,lwt.unix,logs,str,logs.lwt -linkpkg -o messenger ./oscartest.ml

tushar : messenger
	ocamlfind ocamlopt -package unix -linkpkg -o messenger ./tushartest.ml

install : 
	opam update
	opam upgrade
	opam install lwt logs