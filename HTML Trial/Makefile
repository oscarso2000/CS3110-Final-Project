MODULES=encryption authors 
OBJECTS=$(MODULES:=.cmo)
TEST=test.byte
OCAMLBUILD=ocamlbuild -use-ocamlfind

default: build
	utop

build:
	$(OCAMLBUILD) $(OBJECTS)

test:
	$(OCAMLBUILD) -tag debug $(TEST) && ./$(TEST)

run : 
	./messenger

connect : 
	telnet localhost 9000

oscar :
	ocamlopt -c encryption.mli encryption.ml
	ocamlfind ocamlopt -package lwt,lwt.unix,logs,str,logs.lwt -linkpkg -o messenger ./encryption.ml ./oscartest.ml

install : 
	opam update
	opam upgrade
	opam install Core_kernel
	opam install Async_kernel
	opam install Incr_dom
	opam install Js_of_ocaml
	opam install lwt logs extlib

zip :
	zip final.zip *.ml* *.mli*  _tags Makefile INSTALL*

clean:
	ocamlbuild -clean
	rm -rf final.zip
