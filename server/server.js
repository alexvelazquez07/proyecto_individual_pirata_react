/*// CONFIGURACION
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = 8000
require('dotenv').config();


const cookieParser = require('cookie-parser')
//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// middleware que agregar cookies a la solicitud
app.use(cookieParser())

//CORS
app.use(cors({
    origin: 'http://localhost:3000'
   // credentials:true
}))

// requerir archivo de configuracion
require('./config/mongoose.config')

// ENRUTAMIENTO 
const RutaRegistros = require('./routes/usuario.routes')
RutaRegistros(app)

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
*/

const express = require('express');
const cors = require('cors'); //Cors
const app = express();
const cookieParser = require('cookie-parser');

//tengo un archivo .env
//require('dotenv').config();

// This will fire our mongoose.connect statement to initialize our database connection
require('./config/mongoose.config')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
//Damos a saber que se usa credenciales
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));


//Routes
//require('./server/routes/serie.routes')(app);
require('./routes/usuario.routes')(app);
require('./routes/piratas.routes')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

