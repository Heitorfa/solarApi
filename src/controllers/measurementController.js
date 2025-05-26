// src/controllers/measurementController.js
const measurementService = require('../services/measurementService');

exports.create = (req, res) => {
  try {
    const saved = measurementService.saveMeasurement(req.body);
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Falha ao salvar medição' });
  }
};

exports.list = (req, res) => {
  try {
    const all = measurementService.getMeasurements(100);
    res.json(all);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Falha ao ler medições' });
  }
};
