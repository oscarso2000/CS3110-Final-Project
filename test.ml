open OUnit2
open Checkers
open Oscartest
open Encryption
open Reproduce

let checker_tests = 
  [
    "new game" >:: (fun _ ->
        assert_equal 10 (10));
  ]



let suite =
  "final project test suite"  >::: List.flatten [
    checker_tests;
  ]

let _ = run_test_tt_main suite