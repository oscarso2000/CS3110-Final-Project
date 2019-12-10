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
    explode_test "Explode 1" "Hi " ['H';'i';' ']
  ]


let suite =
  "final project test suite"  >::: List.flatten [
    checker_tests;
    app_tests;
  ]

let _ = run_test_tt_main suite