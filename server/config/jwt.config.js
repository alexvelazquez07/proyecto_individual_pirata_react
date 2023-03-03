const jwt = require("jsonwebtoken");
// Obtener la llave secreta del archivo .env
const secret = process.env.SECRET_KEY;

module.exports.authenticate = (req, res, next) => {

    jwt.verify(req.cookies.userToken, secret, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false });
        } else {
            console.log('Authenticated');
            next();
        }
    });
}
