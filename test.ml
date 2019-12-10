open OUnit2
open Checkers
open Testhelper
open Encryption
open Reproduce
open Emoji
open Str


let checker_tests = 
  [
    "new game" >:: (fun _ ->
        assert_equal 10 (10));
  ]


(** [explode s] takes in a string s and converts it into a char list. *)
let explode_test
    (name : string) 
    (input : string)
    (expected_output : char list) = 
  name >:: (fun _ -> 
      assert_equal expected_output (Testhelper.explode input))

(** [split_string s] takes in string s and 
 *   splits it into a string list by spaces *)
let split_string_test
    (name : string)
    (input : string)
    (expected_output : string list) = 
  name >:: (fun _ -> 
      assert_equal expected_output (Testhelper.split_string input))

(** [replace_with_underscore_words h] is a helper function that takes
 *  in a string and replaces spaces with underscores. *)
let underscore_words_test
    (name : string)
    (input : string)
    (expected_output : string) = 
  name >:: (fun _ -> 
      assert_equal expected_output (Testhelper.replace_with_underscore_words input))

(** [replace_with_underscore_list e] is a function that works on 
 *  the list for underscores to make print_emojis work *)
let underscore_list_test
    (name : string)
    (input : string list)
    (expected_output : string list) = 
  name >:: (fun _ -> 
      assert_equal expected_output (Testhelper.replace_with_underscore_list input))

(** [text_emoji_handling str] takes in a user text and changes some 
 *  standard symbols into emojis if any. *)
let text_emoji_test 
    (name : string)
    (input : string)
    (expected_output : string) = 
  name >:: (fun _ -> 
      assert_equal expected_output (Testhelper.text_emoji_handling input))

(** [counting x lst c] is a tail-recursive function that 
 * returns the index of the first element in list lst
 *   that is equal to x where c is the accumulator.  *)
let counting_index_test 
    (name : string)
    (x : 'a)
    (list : 'a list)
    (expected_output : int) = 
  name >:: (fun _ -> 
      assert_equal expected_output (Testhelper.counting x list 0))

(** [handle_message_single msg] takes in a message that the user typed in
 *   and parses it to any commands listed. *)
let handle_single_test
    (name : string)
    (msg : string)
    (expected_output : string) = 
  name >:: (fun _ -> 
      assert_equal expected_output (Testhelper.handle_message_single msg))


let app_tests = 
  [
    explode_test "Explode 1" "Hi " ['H';'i';' '];
    explode_test "Explode 2" "" [];
    explode_test "Explode 3" "Hi" ['H';'i'];
    explode_test "Explode 4" "   " [' ';' ';' '];
    explode_test "Explode 5" "Hi Th" ['H';'i';' ';'T';'h'];
    explode_test "Explode 6" "t 0 3 l" ['t';' ';'0';' ';'3';' ';'l'];
    explode_test "Explode 7" ":)" [':';')'];
    explode_test "Explode 8" "2@s" ['2';'@';'s'];
    explode_test "Explode 9" "l>*" ['l';'>';'*'];
    explode_test "Explode 10" "!@#$%^&*()_+" ['!';'@';'#';'$';'%';'^';'&';'*';'(';')';'_';'+'];
    split_string_test "SS 1" "Hi" ["Hi"];
    split_string_test "SS 2" "Hi There" ["Hi";"There"];
    split_string_test "SS 3" "Hi  " ["Hi"];
    split_string_test "SS 4" "Hi  Hi" ["Hi";"Hi"];
    split_string_test "SS 5" "Hi :)" ["Hi";":)"];
    split_string_test "SS 6" "Hi**:D" ["Hi**:D"];
    split_string_test "SS 7" "!@#$%^&*() <>" ["!@#$%^&*()";"<>"];
    split_string_test "SS 8" "This is tiresome." ["This";"is";"tiresome."];
    (* underscore_words_test "UWT 1" "Hi" "Hi";
       underscore_words_test "UWT 2" "Hi " "Hi_";
       underscore_words_test "UWT 3" "_omg Face" "_omg_Face";
       underscore_words_test "UWT 4" " ok" "_ok";
       underscore_words_test "UWT 5" " ok i " "_ok_i_";
       underscore_words_test "UWT 6" "Hi" "Hi";
       underscore_words_test "UWT 7" "Hi" "Hi";
       underscore_words_test "UWT 8" "Hi" "Hi";
       underscore_words_test "UWT 9" "Hi" "Hi";
       underscore_words_test "UWT 10" "Hi" "Hi";
       underscore_list_test "ULT 1" ["H i"] ["H_i"]; *)
    text_emoji_test "Emoji 1" "ok" "ok"; 
    text_emoji_test "Emoji 2" "o k" "o k"; 
    text_emoji_test "Emoji 3" "ok :)" ("ok "^Emoji.smiling_face); 
    text_emoji_test "Emoji 4" ":) :)" 
      (Emoji.smiling_face ^ " " ^ Emoji.smiling_face); 
    text_emoji_test "Emoji 5" ":):)" ":):)"; 
    text_emoji_test "Emoji 6" ";)" Emoji.winking_face; 
    text_emoji_test "Emoji 7" ":|" Emoji.neutral_face; 
    text_emoji_test "Emoji 8" ":(" Emoji.disappointed_face; 
    text_emoji_test "Emoji 9" "<3" Emoji.sparkling_heart; 
    text_emoji_test "Emoji 10" "</3" Emoji.broken_heart; 
    text_emoji_test "Emoji 11" ":'(" Emoji.crying_face;
    text_emoji_test "Emoji 12" ":D" Emoji.grinning_face;
    text_emoji_test "Emoji 13" "(^^^)" Emoji.shark;
    text_emoji_test "Emoji 14" ":o" Emoji.astonished_face;
    text_emoji_test "Emoji 15" ":O" Emoji.astonished_face;
    text_emoji_test "Emoji 15" ":O :o" 
      (Emoji.astonished_face ^ " " ^ Emoji.astonished_face);
    text_emoji_test "Emoji 16" ":\\" Emoji.slightly_frowning_face;
    counting_index_test "Index 1" 1 [1;2;3] 0;
    counting_index_test "Index 2" 3 [1;2;3] 2;
    counting_index_test "Index 3" 1 [1;2;3;1] 0;
    counting_index_test "Index 4" "hi" ["a";"dang";"bye";"hi"] 3;
    counting_index_test "Index 5" 'a' ['b';'c';'a';'f'] 2;
    counting_index_test "Index 6" false [true;true;false;false] 2;
    handle_single_test "Single 1" "emojis" "Emojis";
    handle_single_test "Single 2" "checkers" "Checkers";
    handle_single_test "Single 3" "read" "Read";
    handle_single_test "Single 4" "recent" "Recent";
    handle_single_test "Single 5" "idkwtf" "Unknown command";
    handle_single_test "Single 6" "Darn Right, I'm" "Not single" ;
  ]


let suite =
  "final project test suite"  >::: List.flatten [
    checker_tests;
    app_tests;
  ]


let _ = run_test_tt_main suite