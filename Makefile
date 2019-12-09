MODULES=encryption authors checkers gface widget
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
	ocamlfind ocamlopt -package emoji -c reproduce.mli reproduce.ml
	ocamlfind ocamlopt -package graphics -c checkers.mli gface.mli widget.mli gface.ml widget.ml checkers.ml
	ocamlfind ocamlopt -package graphics,emoji,uutf,cohttp-lwt-unix,lambdasoup,lwt,lwt.unix,logs,str,logs.lwt -linkpkg -o messenger ./checkers.ml ./gface.ml ./widget.ml ./reproduce.ml ./encryption.ml ./oscartest.ml

install : 
	opam update
	opam upgrade
	opam install emoji
	opam install graphics
	opam install cohttp-lwt-unix
	opam install lambdasoup
	opam install lwt logs extlib

zip :
	zip final.zip *.ml* *.mli*  _tags Makefile *.txt

clean:
	ocamlbuild -clean
	rm -rf final.zip

loc:
	cloc --match-f="\.mli?$$" --not-match-f='^reproduce\.ml' .
