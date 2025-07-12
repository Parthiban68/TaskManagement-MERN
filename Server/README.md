# 🔐 env-crypto

A secure and production-ready CLI tool for managing encrypted environment variables using **RSA + AES-GCM hybrid encryption**. Also includes support for generating RSA key pairs for **JWT RS256 authentication**.

---

## 📦 Features

- 🔐 Hybrid encryption (AES-GCM + RSA)
- 🗝️ RSA 2048-bit key pair generation
- 📁 CLI-based encryption and decryption of `.env` files
- ⚡ Runtime environment injection (`dotenvx`-style)
- ✅ Secure JWT signing/verification with RS256

---

## 📁 Project Structure
env-crypto/
├── bin/
│ └── cli.js # CLI entry point
├── lib/
│ ├── rsa.js # RSA key generation and loading
│ ├── encrypt.js # Hybrid encryption logic
│ ├── decrypt.js # Hybrid decryption logic
│ └── inject.js # Runtime injection logic
├── keys/
│ ├── private.pem # RSA private key
│ └── public.pem # RSA public key
└── scripts/
└── generateKeys.js # Node.js RSA key generation script


---

## 🛠️ Installation

Install dependencies:

```bash
npm install

npm install commander inquirer fs-extra

npm link

```

---

## 🔑 Generate RSA Key Pair (For JWT RS256)

🔸 Option 1: Using OpenSSL

Generate Private Key

openssl_3_1.bin genrsa -out private.pem 2048

Generate Public Key

openssl_3_1.bin rsa -in private.pem -pubout -out public.pem


🔸 Option 2: Using Node.js

// scripts/generateKeys.js

const { generateKeyPairSync } = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const keyDir = path.join(__dirname, "..", "keys");

const { publicKey, privateKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: { type: "spki", format: "pem" },
  privateKeyEncoding: { type: "pkcs8", format: "pem" },
});

fs.writeFileSync(path.join(keyDir, "private.pem"), privateKey);
fs.writeFileSync(path.join(keyDir, "public.pem"), publicKey);

console.log("✅ RSA key pair generated successfully in /keys");


---

## 🚀 CLI Usage

🔐 Encrypt .env File

env-crypto encrypt .env --out .env.enc


🔓 Decrypt .env.enc File

env-crypto decrypt .env.enc --out .env


⚡ Inject Secrets and Run App

env-crypto inject --file app.js
