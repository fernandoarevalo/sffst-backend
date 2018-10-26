const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let tipoPolizaSchema = new Schema({
    ind : {
        type: String,
        required : [true, 'Es necesario parametro de búsqueda']
    },
    nombre: {
        type: String,
        required: [true, 'Es necesario ingresar tipo de póliza']
    },
    valor: {
        type: Number,
        default: 0
    }
}, { collection: 'tipo-polizas' });

module.exports = mongoose.model('TipoPolizas', tipoPolizaSchema);