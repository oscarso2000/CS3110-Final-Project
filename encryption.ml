
(** RSA ENCRYPTION
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

(** [generate_prime] is a prime number. *)
let generate_prime () =
  let small_primes = 
    [3;5;7;11;13;17;19;23;29;31;37;41;43;47;53;59;61;67;71;73;79;83;89;97
    ;101;103;107;109;113;127;131;137;139;149;151;157;163;167;173;179
    ;181;191;193;197;199;211;223;227;229;233;239;241;251;257;263;269
    ;271;277;281;283;293;307;311;313;317;331;337;347;349;353;359;367
    ;373;379;383;389;397;401;409;419;421;431;433;439;443;449;457;461
    ;463;467;479;487;491;499;503;509;521;523;541;547;557;563;569;571
    ;577;587;593;599;601;607;613;617;619;631;641;643;647;653;659;661
    ;673;677;683;691;701;709;719;727;733;739;743;751;757;761;769;773
    ;787;797;809;811;821;823;827;829;839;853;857;859;863;877;881;883
    ;887;907;911;919;929;937;941;947;953;967;971;977;983;991;997] in
  small_primes |> List.length |> Random.int |> List.nth small_primes

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

(** [generate_inverse n m] is the inverse of [n] in the modulus [m], computed
    using the Extended Euclidean algorithm. *)
let generate_inverse n m =
  let rec brute_force i = 
    if (n * i) mod m = 1 then i else brute_force (i+1)
  in brute_force 1

(** [i_exp a b] is [a] to the power of [b] where [a] and [b] are integers. *)
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

  let rec compute acc = function
    | (1, v)::y -> compute ((acc * v) mod m) y
    | (0, v)::y -> compute acc y
    | _ -> acc
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
  (m, k, ki)

(** [encrypt m k p] is an RSA-encrypted ciphertext of [p] 
    using the public key [m, k]. *)
let encrypt m k p =
  mod_pow p m k

(** [decrypt m ki c] is an RSA-decrypted plaintext of [c] 
    using the private key [ki] if [c] was computed using the modulus [m]. *)
let decrypt m ki c =
  mod_pow c m ki

let explode s =
  let rec exp i l =
    if i < 0 then l else exp (i - 1) (s.[i] :: l) in
  exp (String.length s - 1) []

let ord str = 
  let list = explode str in 
  let numbers_list = List.rev(List.rev_map (fun x -> Char.code x) list) in 
  String.concat "" (List.map string_of_int numbers_list)

let ord_opposite str = 
  let list = explode str in 
  let rec helper list = 
    match list with 
    | [] -> "" 
    | h1::h2::t -> h1^h2
    | _ -> ""
  in helper list (*NOT DONE*)



let fst x = 
  match x with 
  | (a,b,c) -> a

let snd x = 
  match x with 
  | (a,b,c) -> b

let thrd x = 
  match x with 
  | (a,b,c) -> c


let run = 
  let receiver = generate_keys () in
  let () = print_string "Enter your message: " in
  let input = read_line () in 
  let upper = String.uppercase_ascii input in 
  let numbers = ord upper in 
  let encrypted = encrypt (fst receiver) (snd receiver) (int_of_string numbers) in  
  let decrypted = decrypt (fst receiver) (thrd receiver) (encrypted) in 
  let message = ord_opposite (string_of_int decrypted) in 
  (print_endline ("Your ASCII code is: " ^ numbers); 
   print_endline ("Your Encrypted Message is: " ^ (string_of_int encrypted));
   print_endline ("Your Decrypted Code is: " ^ (string_of_int decrypted));
   print_endline ("Your Decrypted Message is: " ^ message);)
