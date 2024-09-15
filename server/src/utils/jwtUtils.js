const jwt = require("jsonwebtoken");
const { secretKey } = require("../configuration/jwtConfig");

function generateToken(user) {
    const payload = {
        id: user._id,
        email: user.email
    };
    return jwt.sign(payload, secretKey, { expiresIn: "3d" });
}

module.exports = { generateToken };
