const mongoose = require("mongoose");

let AlumnoSchema = new mongoose.Schema({
    nombre : String,
    apellido : String,
    direccion : String,
    dni : Number,
    nota: Number
})

let Alumno = mongoose.model("Alumno", AlumnoSchema)

module.exports = {
    schema : AlumnoSchema,
    model : Alumno
}