const mongoose = require("mongoose");
const Alumno = require("./alumno.js").schema;

let CursoSchema = new mongoose.Schema({
    nroCurso: Number,
    anno : Number,
    duracion : Number,
    tema : String,
    alumnos : [Alumno]
});

CursoSchema.statics.getAll = function getAll(condicion){
    return this.model("curso").find(condicion);
};

CursoSchema.statics.getById = function getById(id){
    return this.model("curso").findOne({"_id": id});
};

let Curso = new mongoose.model("curso", CursoSchema);

module.exports = {
    schema: CursoSchema,
    model: Curso
};