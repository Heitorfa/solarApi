require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const measurementRoutes = require('./routes/measurementRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', measurementRoutes);

const PORT = process.env.PORT || 3500;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`API rodando na porta ${PORT}`);
    });
  })
  .catch(err => console.error('Erro ao conectar ao DB:', err));