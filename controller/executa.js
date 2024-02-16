const express = require('express');
const calculadora = require('../model/calculo');
const resultado = express.Router(); // Correção: é Router, não Rounter

resultado.post('/', (req, res) => {
    const { lado } = req.body;
    
    // Verifica se cateto1 e cateto2 são fornecidos no corpo da requisição
    if (!lado) {
        return res.status(400).send("Favor fornecer os catetos corretamente.");
    }

    const area = calculadora.Area(parseFloat(lado));
    res.send(`A área é de ${area}`);
});

module.exports = resultado;
