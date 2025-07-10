import { type } from 'node:os'

const crypto = require('node:crypto')
const fs = require('node:fs')

export function generateKeyPair() {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
    })

    fs.mkdir('keys', { recursive: true })
    fs.writeFileSync('keys/RSA_public.pem', publicKey.export({ type: 'pkcs1', format: 'pem' }));
    fs.writeFileSync('keys/RSA_private.pem', privateKey.export({ type: 'pkcs1', format: 'pem' }));
    console.log('done')
}

export function loadkeys(){
    const publicKey = fs.readFileSync('keys/RSA_public.pem', 'utf8');
    const privateKey = fs.readFileSync('keys/RSA_private.pem', 'utf8');
    return { publicKey, privateKey };
  
}