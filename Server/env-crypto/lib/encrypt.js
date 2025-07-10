const fs = require('node:fs');
const crypto = require('node:crypto');
const { loadkeys } = require('./rsa')

export function encryptSeceret(key, value) {
    const { publicKey } = loadkeys();

    const aesKey = crypto.randomBytes(32);
    const iv = crypto.randomBytes(12);

    const cipher = crypto.createCipheriv('ase-256-gcm', aesKey, iv)
    let encrypt = cipher.update(value, 'utf8', 'base64');
    encrypt += cipher.final('base64');
    const tag = cipher.getAuthTag().toString('base64');

    const encryptedAesKey = crypto.publicEncrypt(publicKey, aesKey).toString('base64')

    const vault = fs.existsSync('.env.vault.json') ? JSON.parse(fs.readFileSync('.env.vault.json', 'utf8')) : {}
    
    vault[key]={
        encrypt,
        encryptedAesKey,
        iv:iv.toString('base64'),
        tag
    }
    fs.writeFileSync('.env.vault.json', JSON.stringify(vault, null, 2))
}