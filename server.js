const express = require('express');
const app = express();

const jadwalRoutes = require('./app/routes/jadwal.routes.js');

app.use(express.json());
app.use(jadwalRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});