const express = require('express');
const jadwalController = require('../controllers/jadwal.controller.js');
const router = express.Router();

router.get('/jadwal', jadwalController.getJadwalAll);
router.get('/jadwal/:kode_mk', jadwalController.getJadwalById);
router.post('/jadwal', jadwalController.addJadwal);
router.put('/jadwal/:kode_mk', jadwalController.updateJadwal);
router.delete('/jadwal/:kode_mk', jadwalController.deleteJadwal);

module.exports = router;