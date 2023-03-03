const { User } = require('../models/usuario.model');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret_key = 'clavasecreta'; 
//process.env.SECRET_KEY

//Register
module.exports.registerUser = async (req, res) => {

    try {
        console.log('Capturando valor de KEY :' + secret_key)
        const newUser = await User.create(req.body);
        const userToken = jwt.sign({ _id: newUser._id }, secret_key)
        // Contiene el token, mientras no se expire o no haga logout puede utilizar la app, httponly para que la cookie no sea desencriptada
        res.status(201).cookie('userToken', userToken, secret_key, { httpOnly: true })
            .json({ successMessage: "Register succesfully, has a cookie", user: newUser })

        console.log("Usertoken register", userToken);
    }
    catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}

//Login
module.exports.loginUser = async (req, res) => {

    User.findOne({ email: req.body.email }) //find the user with the email
        .then(user => {
            if (user === null) {
                res.status(400).json({ message: "NO existe el usuario ingresado" });// Si no existe ese usuario enviar un error 
            } else {

                bcrypt.compare(req.body.clave, user.clave)// Validar que la contraseña ingresada sea igual a la contraseña en la base de datos
                    .then(passwordIsValid => {

                        if (passwordIsValid) {
                            // Generar el token si es que la contraseña coincide
                            const userToken = jwt.sign({ _id: user._id }, secret_key)
                            // Contiene el token, mientras no se expire o no haga logout puede utilizar la app, httponly para que la cookie no sea desencriptada
                            res.cookie("userToken", userToken, { httpOnly: true }).json({ message: "Acceso correcto" });
                        } else {
                            res.status(400).json({ message: "Clave Incorrecta" });// Si no es correcta la contraseña emitir un error
                        }
                    })
                    .catch(err => res.status(400).json({ message: "invalid login attempt" }));
                  //  console.log(err);
            }
        })
        
        .catch(err => res.status(400).json(err));
        //console.log(err);

}

//Logout
module.exports.logoutUser = (req, res) => {
    res.clearCookie('userToken');
    res.json({message: 'User logout'});
}