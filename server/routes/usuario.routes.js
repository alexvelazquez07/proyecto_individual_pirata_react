const ControladorUsuarios = require('../controllers/usuario.controller');

module.exports = (app) => {
    app.post('/api/registrar', ControladorUsuarios.registerUser);
    app.post('/api/login', ControladorUsuarios.loginUser);
    
}