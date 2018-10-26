const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let tipoPolizaSchema = new Schema({
    id: {
        type: String,
        required: [true, 'Es necesario ingresar id de póliza']
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