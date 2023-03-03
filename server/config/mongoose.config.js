const mongoose = require ('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/proyecto', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Se estableció la conexión a la Base de datos'))
    .catch(err => console.log('Error al conectarse a la Base de datos ', err));