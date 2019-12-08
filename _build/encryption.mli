
(** [generate_keys ()] is [m, k, ki] where [m, k] is the public key
    and [ki] is the private key for a new RSA encryption. *)
val generate_keys : unit -> int * int * int

(** [encrypt m k p] is an RSA-encrypted ciphertext of [p] 
    using the public key [m, k]. *)
val encrypt : int -> int -> int -> int

(** [decrypt m ki c] is an RSA-decrypted plaintext of [c] 
    using the private key [ki] if [c] was computed using the modulus [m]. *)
val decrypt : int -> int -> int -> int