const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let polizasSchema = new Schema({
    cedula: {
        type: String,
        required: [true, 'Es necesario ingresar cedula']
    },
    nombre: {
        type: String,
        required: [true, 'Es necesario ingresar nombre']
    },
    tipo_poliza: {
        type: Number,
        required: [true, 'Es necesario seleccionar tipo de poliza']
    },
    numero_poliza: {
        type: Number,
        required: [true, 'Es necesario ingresar número de poliza']
    }
}, { collection: 'polizas' });

module.exports = mongoose.model('Poliza', polizasSchema);