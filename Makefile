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
	ocamlfind ocamlopt -package emoji,uutf,cohttp-lwt-unix,lambdasoup,lwt,lwt.unix,logs,str,logs.lwt -linkpkg -o messenger ./reproduce.ml ./encryption.ml ./oscartest.ml

install : 
	opam update
	opam upgrade
	opam install emoji
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