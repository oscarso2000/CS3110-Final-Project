
run : 
	./messenger

connect : 
	telnet localhost 9000

oscar :
	ocamlfind ocamlopt -package lwt,lwt.unix,logs,str,logs.lwt -linkpkg -o messenger ./oscartest.ml

tushar : 
	ocamlfind ocamlopt -package unix -linkpkg -o messenger ./tushartest.ml

aidan :
	ocamlfind ocamlopt -package unix -linkpkg -o messenger ./aidanswackyocamladventure.ml

install : 
	opam install lwt logs

zip :
	zip final.zip *.ml* Makefile INSTALL*
