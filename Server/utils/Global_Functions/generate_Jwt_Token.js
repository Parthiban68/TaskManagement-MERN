const jwt = require('jsonwebtoken');
const path = require('node:path');
const fs = require('node:fs');

const paths = path.join(__dirname, "..", "RSA_keys", "private.pem")
const privateKey = fs.readFileSync(paths)

function generateJwtToken(user) {
    const payload = {
        id: user.user_id,
        email: user.email
    }
    const token = jwt.sign(payload, privateKey, {
        algorithm: 'RS256',
        expiresIn: '15m',
        issuer: 'Parthiban',
        audience: 'My-users',
        subject: user.user_id.toString(),
    })
    return token;
}

module.exports = { generateJwtToken }