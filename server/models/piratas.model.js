const mongoose = require("mongoose");

//Schema
const PirataSchema = new mongoose.Schema({
    position: { 
        type: String,
        enum : [
            'Captain',
            'First Mate',
            'Quarter Master',
            'Boatswain',
            'Powder Monkey'],
            required:[true, "Por favor selecciona un tipo de posicion"],
        
    },
    name: { 
        type: String,
        required: [true,"Por favor incluir nombre"],
        minLength : [3, "Nombre debe incluir al menos 3 caracteres"] 
    },
    imagen: { 
        type: String,
        required: [true, "Es obligatorio colocar una URL"],
    },
    treassures: { 
        type: Number,
        required: [true, "Debe colocar una cantidad"],
        
        
    },
    peg_leg: { 
        type: Boolean,
        default: false
    },
    eye_patch: { 
        type: Boolean,
        default: false
    },
    hook_hand: { 
        type: Boolean,
        default: false 
    },
    pirate_catch: { 
        type: String,
        required: [true, "Debe completar el campo Pirate Catch"],
    },

    },{ timestamps: true }
);

const Pirata = mongoose.model('Pirata', PirataSchema)

module.exports = Pirata