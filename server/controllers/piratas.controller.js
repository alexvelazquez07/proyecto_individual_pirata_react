const Piratas = require("../models/piratas.model")

//Crear un pirata nuevo 
const crearPirata =  (req, res)=>{
    Piratas.create(req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error);
        res.status(400).json(error);
    })
}

//Llama a todos los Piratas de la BD yo ordernar por nombre de forma ascendente
const get_all = (req, res) =>{
    Piratas.find().sort({name:1})
    .then(piratas =>res.json(piratas))
    .catch(err => {
        console.log(err);
        res.status(404).json(err);
    });
}

//llama a un pirata en especifico por su id
const get_pirata = (req, res) =>{
    Piratas.findOne({_id:req.params.id})
        .then(pirata => res.json(pirata))
        .catch(err => res.status(404).json(err));
}

//actualizamos un registro de pirata
const update_pirata = (req, res) => {
    Piratas.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
        .then(pirata => res.json(pirata))
        .catch(err => res.status(400).json(err));
}

  //borramos un pirata
const delete_pirata =(req, res) =>{
    Piratas.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
}

module.exports = {
    crearPirata,
    get_pirata,
    update_pirata,
    delete_pirata,
    get_all
}