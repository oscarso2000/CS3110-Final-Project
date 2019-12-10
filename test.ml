open OUnit2
open Checkers
open Testhelper
open Encryption
open Reproduce


let checker_tests = 
  [
    "new game" >:: (fun _ ->
        assert_equal 10 (10));
  ]

let explode_test
    (name : string) 
    (input : string)
    (expected_output : char list) = 
  name >:: (fun _ -> 
      assert_equal expected_output (Testhelper.explode input))

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
  ]


let suite =
  "final project test suite"  >::: List.flatten [
    checker_tests;
    app_tests;
  ]

let _ = run_test_tt_main suite