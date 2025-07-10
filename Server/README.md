Use openssl command to create the private and public key for jwt auth 

# Generate private key
openssl_3_1.bin genrsa -out private.pem 2048

# Generate public key
openssl_3_1.bin rsa -in private.pem -pubout -out public.pem

if you dont have openssl in your machine run this command in you bash terminal

# Install openssl
openssl_3_1.bin

# ----------------------If openssl is not working use the below code to generate RSA keys--------------------- #

#-------------------BEGIN-----------------------#
const { generateKeyPairSync } = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const keyDir = path.join(__dirname, "..", "Secret_keys");

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

fs.writeFileSync(path.join(keyDir, "private.pem"), privateKey);
fs.writeFileSync(path.join(keyDir, "public.pem"), publicKey);

#-------------------END-----------------------#

# CLI based env encrypt
install -----> npm i commander inquirer fs-extra
                  &&&&&&&
npm link run the cmd to link the cli