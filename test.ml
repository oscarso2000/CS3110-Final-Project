(** Test Plan: 
 * For testing, we made sure to test as many cases as possible.
 * We first created tests for the checkers game, then created
 * tests for oscartest.ml. However, given that the app requires
 * pre-inputed files, we had to rewrite functions differently in
 * order to test the helper functions. Thus, we have Testhelper.ml. 
 * We also tested some of the reproduce.ml emojis just to make sure that 
 * the function was working as intended. Lastly, we just made sure to test
 * anything else that we knew could have some problems.
 * However, we also did A LOT of front-end user testing. Given the app was 
 * created since MS1, we have tried to constantly break the app. 
 * Thus, we have added a lot of try and catches to ensure that the user
 * can't, for most cases, break the system. *)

open OUnit2
open Checkers
open Minesweeper
open Testhelper
open Encryption
open Reproduce
open Emoji
open Str

let init_checkers = Checkers.new_game
let blues_move_1 = Checkers.move init_checkers (2,1) (3,2)
let reds_move_2 = Checkers.move blues_move_1 (5,2) (4,3)
let blues_move_3 = Checkers.move reds_move_2 (2,3) (3,4)
let reds_move_4 = Checkers.move blues_move_3 (4,3) (2,1)
let blues_move_5 = Checkers.move reds_move_4 (3,4) (4,3)
let reds_move_6 = Checkers.move blues_move_5 (5,4) (3,2)
let bm7 = Checkers.move reds_move_6 (1,2) (3,0)
let rm8 = Checkers.move bm7 (5,0) (4,1)
let bm9 = Checkers.move rm8 (3,0) (5,2)
let rm10 = Checkers.move bm9 (6,1) (4,3)
let bm11 = Checkers.move rm10 (2,5) (3,4)
let rm12 = Checkers.move bm11 (3,2) (2,3)
let bm13 = Checkers.move rm12 (3,4) (5,2)
let rm14 = Checkers.move bm13 (6,3) (4,1)
let bm15 = Checkers.move rm14 (1,4) (3,2)
let rm16 = Checkers.move bm15 (4,1) (2,3)
let bm17 = Checkers.move rm16 (2,7) (3,6)
let rm18 = Checkers.move bm17 (2,3) (1,4)
let bm19 = Checkers.move rm18 (0,5) (2,3)
let rm20 = Checkers.move bm19 (5,6) (4,7)
let bm21 = Checkers.move rm20 (1,0) (2,1)
let rm22 = Checkers.move bm21 (4,7) (2,5)
let bm23 = Checkers.move rm22 (1,6) (3,4)
let rm24 = Checkers.move bm23 (6,7) (5,6)
let bm25 = Checkers.move rm24 (3,4) (4,5)
let rm26 = Checkers.move bm25 (5,6) (3,4)
let bm27 = Checkers.move rm26 (2,3) (4,5)
let rm28 = Checkers.move bm27 (6,5) (5,4)
let bm29 = Checkers.move rm28 (4,5) (6,3)
let rm30 = Checkers.move bm29 (7,2) (5,4)
let bm31 = Checkers.move rm30 (2,1) (3,2)
let rm32 = Checkers.move bm31 (7,0) (6,1)
let bm33 = Checkers.move rm32 (0,1) (1,0)
let rm34 = Checkers.move bm33 (7,4) (6,5)
let bm35 = Checkers.move rm34 (0,3) (1,2)
let rm36 = Checkers.move bm35 (5,4) (4,3)
let bm37 = Checkers.move rm36 (3,2) (5,4)
let rm38 = Checkers.move bm37 (6,5) (4,3)
let bm39 = Checkers.move rm38 (0,7) (1,6)
let rm40 = Checkers.move bm39 (7,6) (6,5)
let bm41 = Checkers.move rm40 (1,6) (2,5)
let rm42 = Checkers.move bm41 (4,3) (3,4)
let bm43 = Checkers.move rm42 (2,5) (4,3)
let rm44 = Checkers.move bm43 (6,5) (5,4)
let bm45 = Checkers.move rm44 (4,3) (6,5)
let rm46 = Checkers.move bm45 (6,1) (5,2)
let bm47 = Checkers.move rm46 (6,5) (5,4)
let rm48 = Checkers.move bm47 (5,2) (4,3)
let bm49 = Checkers.move rm48 (5,4) (4,5)
let rm50 = Checkers.move bm49 (4,3) (5,2)
let bm51 = Checkers.move rm50 (1,2) (2,1)
let rm52 = Checkers.move bm51 (5,2) (4,3)
let bm53 = Checkers.move rm52 (2,1) (3,2)
let rm54 = Checkers.move bm53 (4,3) (2,1)
let bm55 = Checkers.move rm54 (1,0) (3,2)

let checker_tests = 
  [
    "red turn blue moves validly" >:: (fun _ ->
        assert_equal (Checkers.valid_move init_checkers (5,0) (4,1)) false);
    "red turn blue moves invalidly1" >:: (fun _ -> 
        assert_equal (Checkers.valid_move init_checkers (5,0) (4,0)) false);
    "red turn blue moves invalidly2" >:: (fun _ -> 
        assert_equal (Checkers.valid_move init_checkers (5,0) (4,-1)) false);
    "red turn blue moves invalidly3" >:: (fun _ -> 
        assert_equal (Checkers.valid_move init_checkers (5,0) (5,1)) false);  
    "red turn blue moves invalidly4" >:: (fun _ -> 
        assert_equal (Checkers.valid_move init_checkers (5,0) (6,1)) false);
    "red turn blue moves invalidly5" >:: (fun _ -> 
        assert_equal (Checkers.valid_move init_checkers (5,0) (6,0)) false);
    "red turn blue moves invalidly6" >:: (fun _ -> 
        assert_equal (Checkers.valid_move init_checkers (5,0) (6,1)) false); 
    "red turn blue moves invalidly7" >:: (fun _ -> 
        assert_equal (Checkers.valid_move init_checkers (5,0) (2000,20000)) false); 
    "red turn blue moves on top of blue" >:: (fun _ -> 
        assert_equal (Checkers.valid_move init_checkers (6,1) (5,0)) false);
    "blank space cant Checkers.move" >:: (fun _ ->
        assert_equal (Checkers.valid_move init_checkers (3,3) (4,4)) false);
    "red moves validly on reds turn" >:: (fun _ ->
        assert_equal (Checkers.valid_move init_checkers (2,1) (3,2)) true);
    "red cant Checkers.move on blue turn" >:: (fun _ ->
        assert_equal (Checkers.valid_move blues_move_1 (3,2) (4,3)) false); 
    "blue hops red" >:: (fun _ ->
        assert_equal (Checkers.valid_move blues_move_3 (4,3) (2,1)) true);
    "cant double hop when not allowed" >:: (fun _ ->
        assert_equal (Checkers.valid_move reds_move_4 (3,4) (5,2)) false);
    "get player works" >:: (fun _ ->
        assert_equal (Checkers.get_player init_checkers) Red);
    "squares where they belong" >:: (fun _ ->
        assert_equal (Checkers.get_square init_checkers (2,1)) (Some Red));
    "squares where they belong2" >:: (fun _ ->
        assert_equal (Checkers.get_square init_checkers (2,0)) (None));
    "squares where they belong3" >:: (fun _ ->
        assert_equal (Checkers.get_square init_checkers (5,0)) (Some Black));
    "no squares outside the grid" >:: (fun _ ->
        assert_raises  Checkers.Invalid_pos (fun () -> (Checkers.get_square init_checkers (20,20))));
    "no winner yet" >:: (fun _ ->
        assert_equal (Checkers.winner bm53) (None));
    "there is a winner" >:: (fun _ ->
        assert_equal (Checkers.winner bm55) (Some Red));

  ]

let g1 = Minesweeper.seed_new_game 1
let g2 = Minesweeper.uncover g1 (4,4)
let g3 = Minesweeper.uncover g2 (6,1)
let g4 = Minesweeper.flag g3 (0,2)
let g5 = Minesweeper.uncover g4 (0,2)

let minesweeper_tests = 
  [
    "box is correct" >:: (fun _ ->
        assert_equal (Minesweeper.get_box g1 (4,4)) (Hidden, Number 0));
    "box is uncovered" >:: (fun _ ->
        assert_equal (Minesweeper.get_box g2 (4,4)) (Uncovered, Number 0));
    "box is invalid" >:: (fun _ ->
        assert_raises Minesweeper.Invalid_pos (fun () -> Minesweeper.get_box g1 (50,50)));
    "unfinished game" >:: (fun _ ->
        assert_equal (Minesweeper.game_result g1) Incomplete);
    "1 mine around" >:: (fun _ ->
        assert_equal (Minesweeper.get_box g3 (6,1)) (Uncovered, Number 1));
    "correct mine location" >:: (fun _ ->
        assert_equal (Minesweeper.get_box g3 (0,2)) (Hidden, Mine));
    "flagged correctly" >:: (fun _ ->
        assert_equal (Minesweeper.get_box g4 (0,2)) (Flag, Mine));
    "we lost?" >:: (fun _ ->
        assert_equal (Minesweeper.game_result g5) Lose);
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
    split_string_test "SS 8" ". ." [".";"."];
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

(** [reproduce_emoji s] takes in the user input of what emoji they want to 
 *  send and maps it to the actual string Emoji. *)
let reproduce_emoji_test
    (name : string)
    (emoji : string)
    (expected_output : string) = 
  name >:: (fun _ -> 
      assert_equal expected_output (Reproduce.reproduce_emoji emoji))

let reproduce_tests = 
  [
    reproduce_emoji_test "Emo 1" "nerd_face" Emoji.nerd_face;
    reproduce_emoji_test "Emo 2" "confused_face" Emoji.confused_face;
    reproduce_emoji_test "Emo 3" "worried_face" Emoji.worried_face;
    reproduce_emoji_test "Emo 4" "slightly_frowning_face" 
      Emoji.slightly_frowning_face;
    reproduce_emoji_test "Emo 5" "frowning_face" Emoji.frowning_face;
    reproduce_emoji_test "Emo 6" "face_with_open_mouth" 
      Emoji.face_with_open_mouth;
    reproduce_emoji_test "Emo 7" "hushed_face" Emoji.hushed_face;
    reproduce_emoji_test "Emo 8" "astonished_face" Emoji.astonished_face;
    reproduce_emoji_test "Emo 9" "flushed_face" Emoji.flushed_face;
    reproduce_emoji_test "Emo 10" "frowning_face_with_open_mouth" 
      Emoji.frowning_face_with_open_mouth;
    reproduce_emoji_test "Emo 11" "anguished_face" Emoji.anguished_face;
    reproduce_emoji_test "Emo 12" "fearful_face" Emoji.fearful_face;
    reproduce_emoji_test "Emo 13" "crying_face" Emoji.crying_face;
    reproduce_emoji_test "Emo 14" "loudly_crying_face" Emoji.loudly_crying_face;
    reproduce_emoji_test "Emo 15" "face_screaming_in_fear" Emoji.face_screaming_in_fear;
    reproduce_emoji_test "Emo 16" "confounded_face" Emoji.confounded_face;
    reproduce_emoji_test "Emo 17" "persevering_face" Emoji.persevering_face;
    reproduce_emoji_test "Emo 18" "disappointed_face" Emoji.disappointed_face;
    reproduce_emoji_test "Emo 19" "flag:_hong_kong_sar_china" Emoji.hong_kong_sar_china;
    reproduce_emoji_test "Emo 20" "flag:_united_states" Emoji.united_states;
  ]


let suite =
  "final project test suite"  >::: List.flatten [
    checker_tests;
    minesweeper_tests;
    app_tests;
    reproduce_tests;
  ]


let _ = run_test_tt_main suite