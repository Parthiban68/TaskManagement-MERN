Use openssl command to create the private and public key for jwt auth 

# Generate private key
openssl_3_1.bin genrsa -out private.pem 2048

# Generate public key
openssl_3_1.bin rsa -in private.pem -pubout -out public.pem

if you dont have openssl in your machine run this command in you bash terminal

# Install openssl
openssl_3_1.bin


