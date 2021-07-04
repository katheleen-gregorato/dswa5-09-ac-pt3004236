var mongoose = require('mongoose'); module.exports = function() {
    var schema = mongoose.Schema({
        coordenador: {type: String, required: true},
        curso: { type: String, required: true, index: { unique: true } }
    });
    return mongoose.model('Curso', schema);
};