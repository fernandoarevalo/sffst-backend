const express = require('express');
const polizaSegurosRouter = express.Router();
const Polizas = require('../models/polizas');
const _ = require('underscore');

/**
 * Crear una póliza de seguro
 */
polizaSegurosRouter.post('/v1/poliza-seguro', (req, res) => {
    let body = req.body;

    let poliza = new Polizas({
        cedula: body.cedula,
        nombre: body.nombre,
        tipo_poliza: body.tipo_poliza,
        numero_poliza: body.numero_poliza
    });

    

    poliza.save((err, poilizaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        res.json(poilizaDB);
    });
});

module.exports = polizaSegurosRouter;