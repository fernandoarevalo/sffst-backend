const express = require('express');
const tipoPolizasRouter = express.Router();
const TipoPolizas = require('../models/tipo-polizas');
const _ = require('underscore');

/**
 * Obtener todos los tipos de pólizas
 */
tipoPolizasRouter.get('/v1/tipo-polizas', (req, res) => {
    TipoPolizas.find({}, (err, tiposPolizas) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.send(tiposPolizas);
    });
});

/**
 * Crear un tipo de póliza de seguro
 */
polizaSegurosRouter.post('/v1/tipo-poliza', (req, res) => {
    let body = req.body;

    let tipo_poliza = new TipoPolizas({
        id: body.id,
        nombre: body.nombre,
        valor: body.valor
    });

    tipo_poliza.save((err, tipoPoilizaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        res.json(tipoPoilizaDB);
    });
});

module.exports = tipoPolizasRouter;