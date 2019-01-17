const express = require('express');
const Curso = require("../models/curso.js").model;
const { check } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');
const bearerToken = require('express-bearer-token');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.use(bearerToken());

router.use(function (req, res, next) {
    jwt.verify(req.token, process.env.API_SECRET, function(err) {
        if(err) {
            res.status(401).json({msg:"Acceso no autorizado"})
        } else {
            next();
        }
    });
});



router.post('/', function(req, res) {
    Curso(req.body).save({validateBeforeSave: true})
        .then(result => res.status(200).json({ msg: "Curso creado"}))
        .catch(err => res.status(404).json({ msg: "No se pudo crear el curso: " + err.message}))
});

router.get("/",[
    check("anno").optional().isInt().toInt(),
    check("duracion").optional().isInt().toInt()
], function (req, res){
    whitelistParameters(req,() => {
        Curso.getAll(matchedData(req))
            .then(results => res.status(200).json(results))
            .catch(err => res.status(404).json({msg: err.message}))
    },()=>{
        res.status(404).json({ msg: "Verifique sus parametros de filtrado"})
    })

});

router.delete("/:id",function (req, res){
    Curso.deleteOne({ "_id": req.params.id })
        .then(result => res.status(200).json({ msg: "Curso eliminado"}))
        .catch(err => res.status(404).json({ msg: "No se pudo eliminar el curso: "+ err.message}))
});

router.get("/:id/alumnos", function (req, res){
    Curso.getById(req.params.id)
        .then(results => {
            if(req.query.destacado == 1){
                res.status(200).json(alumnoDestacado(results.alumnos))
            }else{
                res.status(200).json(results.alumnos)
            }})
        .catch(err => res.status(404).json({ msg: "No se pudieron recuperar los alumnos: "+ err.message}))
});

module.exports = router;

// Dada una lista de alumnos, devuelve el de mayor nota
function alumnoDestacado (alumnos){
    return alumnos.reduce((destacado, actual) => destacado.nota > actual.nota ? destacado : actual)
}

// Usando la feature matchedData
// whitelistParameters verifica que solo se esten recibiendo los parametros de query que hayan sido chequeados
// Permitiendo definir callbacks en caso de que todos los parametros sean correctos o haya alguno invalido
function whitelistParameters (req, success, failure){
    if(JSON.stringify(matchedData(req)) === JSON.stringify(req.query)){
        success()
    } else {
        failure()
    }
}