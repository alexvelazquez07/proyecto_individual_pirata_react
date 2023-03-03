const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "First name is required"]
    },
    apellido: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    clave: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    }
}, { timestamps: true });

// Encriptar contraseña
// Antes de realizar el create del user se realiza esta funcion que encripta la contraseña
UserSchema.pre('save', async function (next) {
    try {
        console.log('Llegue al model')
        const hashedPassword = await bcrypt.hash(this.clave, 10);
        this.clave = hashedPassword;
        // Para que continue con el proceso ya que se llama a create en el controller y esta funcion se realiza antes del create
        next();
    } catch (error) {
        console.log("Error save user", error);
    }

})

module.exports.User = mongoose.model("User", UserSchema);