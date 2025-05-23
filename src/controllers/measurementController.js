const Measurement = require('../models/Measurement');

exports.create = async (req, res) => {
  try {
    const { voltage, current, temperature } = req.body;
    if (voltage == null || current == null) {
      return res.status(400).json({ error: 'voltage e current são obrigatórios' });
    }

    const m = await Measurement.create({ voltage, current, temperature });
    return res.status(201).json(m);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro interno' });
  }
};

exports.list = async (req, res) => {
  try {
    const list = await Measurement.findAll({
      order: [['timestamp', 'DESC']],
      limit: 100,
    });
    return res.json(list);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro interno' });
  }
};