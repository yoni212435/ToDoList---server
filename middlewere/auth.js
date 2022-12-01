const jwt = require("jsonwebtoken")
const { validateToken } = require('./jwt')

const authJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split("")[1];
        jwt.verify(token, process.env.SECRET_JWT, (err, verifyToken) => {
            if (err) {
                return res.sendstatus(403);
            }
            req._id = validateToken._id;
            next();
        });
    } else {
        res.sendstatus(401);
    }
};
module.exports = { authJWT }