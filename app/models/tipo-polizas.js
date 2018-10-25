const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let tipoPolizaSchema = new Schema({
    tipo: {
        type: String,
        required: [true, 'Es necesario ingresar tipo de poliza']
    },
    valor: {
        type: Number,
        default: 0
    }
}, { collection: 'tipo-polizas' });

module.exports = mongoose.model('TipoPolizas', tipoPolizaSchema);