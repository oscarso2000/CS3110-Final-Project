
(** @author Tushar Khan (tak62) *)

(* RSA ENCRYPTION
 * 
 * VARIABLES
 * p, q : distinct primes
 * m = p * q : modulus; part of public key
 * t = (p-1) * (q-1) : totient of m
 * k : unit of t, i.e. relatively prime to t; part of public key
 * k^-1 : inverse of k; private key
 *
 * p : plaintext
 * c = (p mod m)^k : cyphertext
 *
 * ENCRYPTION
 * (m, k) transmitted to the world as public key
 * sender computes c = (p mod m)^k
 * sender transmits c
 *
 * DECRYPTION
 * k^-1 stored as private key
 * reciever computes p = c^(k^-1)
 *
*)

(* TODO:
 * - implement [generate_prime] using probabilistic algorithm
 * - implement [generate_inverse] using Extended Euclidean algorithm
*)

(** [primes1] is a list of one million primes in the interval 
    [961748941, 982451653], which spans exactly 1000000 primes. *)
let primes1 = 
  let filename = "primes1.txt" in print_endline ("Parsing "^filename^" ...");
  let channel = open_in filename in

  (** [parse_primes1 acc] is a list of the numbers from 'primes1.txt'. *)
  let rec parse_primes1 acc =
    match input_line channel |> String.trim with
    | exception (End_of_file) -> acc
    | str -> parse_primes1 ((parse_primes1_line str)@acc)
  and parse_primes1_line line =
    line |> String.split_on_char ' ' |> 
    List.filter (fun s -> String.trim s <> "") |> 
    List.map (fun s -> s |> String.trim |> int_of_string)
  in
  parse_primes1 []

(** [generate_prime] is a prime number. *)
let generate_prime () =
  let primes = primes1 in
  primes |> List.length |> Random.int |> List.nth primes

(** [gcd x y] is the greatest-common divisor of [x] and [y], computed using
    the Euclidean Division algorithm. *)
let rec gcd x y =
  let a = max x y in
  let b = min x y in 
  if b = 0 then a else gcd b (a mod b)

(** [generate_unit m] is a unit of [m]. *)
let generate_unit m =
  let rec find_unit m i =
    if gcd m i = 1 then i else find_unit m (i+1)
  in find_unit m 2

(** [generate_inverse n m] is the inverse of [n] in the modulo [m], computed
    using the Extended Euclidean algorithm. *)
let generate_inverse n m =
  let rec extended_euclid r r' t t' : int =
    print_endline ((string_of_int r)^" "^(string_of_int r')^" "^(string_of_int t)^" "^(string_of_int t'));
    if r' = 0 then
      if r > 1 then failwith ((string_of_int n)^" is non-invertible") else
      if t < 0 then t + m else t
    else let q = r / r' in extended_euclid r' (r-q*r') t' ((t-q*t') mod m)
  in extended_euclid m n 0 1
(*
let rec brute_force i = 
  if (n * i) mod m = 1 then i else brute_force (i+1)
in brute_force 1
*)

(** [i_exp a b] is a^b where [a] and [b] are integers. *)
let i_exp a b = int_of_float ((float_of_int a) ** (float_of_int b))

(** [mod_pow x m k] is (x mod m)^k, computed using the fast 
    exponentiation algorithm. *)
let mod_pow x m k =
  let rec modular_exponents n acc =
    if i_exp 2 (List.length acc) > n then acc else
      match acc with
      | [] -> modular_exponents n [x]
      | a::y -> modular_exponents n (((i_exp a 2) mod m)::a::y)
  in 

  let rec to_binary d acc =
    if d = 0 then acc else to_binary (d lsr 1) ((d land 1) :: acc)
  in

  ignore (to_binary k [] |> List.map (fun x -> print_endline (string_of_int x)));
  print_endline "---";
  ignore (modular_exponents k [] |> List.map (fun x -> print_endline (string_of_int x)));

  let rec compute acc = function
    | (1, v)::y -> compute ((acc * v) mod m) y
    | (0, _)::y -> compute acc y
    | _ -> if acc < 0 then acc + m else acc
  in compute 1 (List.combine (to_binary k []) (modular_exponents k []))

(** [generate_keys ()] is [(m, k, ki)] where [m, k] is the public key
    and [ki] is the private key for a new RSA encryption. *)
let generate_keys () =
  let p = generate_prime () in
  let q = generate_prime () in
  let m = p * q in
  let t = (p-1) * (q-1) in
  let k = generate_unit t in
  let ki = generate_inverse k t in
  (m, k, ki, p, q)

(** [encrypt m k p] is an RSA-encrypted ciphertext of [p] 
    using the public key [m, k]. *)
let encrypt m k p =
  mod_pow p m k

(** [decrypt m ki c] is an RSA-decrypted plaintext of [c] 
    using the private key [ki] if [c] was computed using the modulus [m]. *)
let decrypt m ki c =
  mod_pow c m ki