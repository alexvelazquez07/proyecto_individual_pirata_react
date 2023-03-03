const PirataController = require ("../controllers/piratas.controller");
const {authenticate} = require('../config/jwt.config');

module.exports = function (app) {
    app.post("/api/crearpirata", PirataController.crearPirata);
    app.get("/api/listarpiratas",PirataController.get_all);
    app.get("/api/piratas/:id",PirataController.get_pirata);
    app.put("/api/piratas/:id",PirataController.update_pirata);
    app.delete("/api/piratas/:id",PirataController.delete_pirata);
}