const jwt = require('jsonwebtoken');
const path = require('node:path');
const fs = require('node:fs');

const publicKey = fs.readFileSync(path.join(__dirname, "..", "utils", "RSA_keys", "public.pem"));

function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Missing or Invalid authorization header" });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decode = jwt.sign(token, publicKey, {
            algorithm: 'RS256',
            issuer: 'Parthiban',
            audience: 'My-users'
        });
        req.user = decode;
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid or expired token" })
    }
}

module.exports =  verifyToken;