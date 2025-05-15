const jadwalKuliah = require('../models/jadwal.model.js');

const getJadwalAll = (req, res, next) => {
    try {
        res.status(200).json({
            status: 'success',
            message: 'Successfully get all mata kuliah',
            data: jadwalKuliah
        });
    } catch (error) {
        console.log(error.message);
    }
}

const getJadwalById = (req, res, next) => {
    try {
        const { kode_mk } = req.params;

        const mataKuliah = jadwalKuliah.find((mataKuliah) => mataKuliah.kode_mk == kode_mk);

        if (!mataKuliah) {
            res.status(400).json({
                status: 'error',
                message: `mata kuliah with kode mk ${kode_mk} not found`
            });
        }
        else {
            res.status(200).json({
                status: 'success',
                message: 'successfully get mata kuliah with kode mk ' + kode_mk,
                mataKuliah: mataKuliah
            });
        }
    } catch (error) {
        console.log(error.message);
    }
}

const addJadwal = (req, res, next) => {
    try {
        const { thn_kur, kode_mk, nama_mk, semester, sks, kelas, jadwal, dosen } = req.body;

        const newJadwal = {
            thn_kur: thn_kur,
            kode_mk: kode_mk,
            nama_mk: nama_mk,
            semester: semester,
            sks: sks,
            kelas: kelas,
            jadwal: jadwal,
            dosen: dosen
        };

        jadwalKuliah.push(newJadwal);

        res.status(201).json({
            status: 'success',
            message: 'Successfully add new mata kuliah',
            data: jadwalKuliah
        });
    } catch (error) {
        console.log(error.message);
    }
}

const deleteJadwal = (req, res, next) => {
    try {
        const { kode_mk } = req.params;

        const targetedJadwal = jadwalKuliah.find((mataKuliah) => mataKuliah.kode_mk == kode_mk);

        if (targetedJadwal == -1) {
            res.status(400).json({
                status: 'error',
                message: `mata kuliah with kode mk ${kode_mk} not found`
            });
        }
        else {
            jadwalKuliah.splice(targetedJadwal, 1);

            res.status(200).json({
                status: 'success',
                message: 'Successfully delete mata kuliah',
                data: jadwalKuliah
            });
        }
    } catch (error) {
        console.log(error.message);
    }
}

const updateJadwal = (req, res, next) => {
    try {
        const { thn_kur, kode_mk, nama_mk, semester, sks, kelas, jadwal, dosen } = req.body;

        const targetedJadwal = jadwalKuliah.findIndex((mataKuliah) => mataKuliah.kode_mk == kode_mk);

        if (targetedJadwal == -1) {
            res.status(400).json({
                status: 'error',
                message: `mata kuliah with kode mk ${kode_mk} not found`
            });
        }
        else {
            jadwalKuliah[targetedJadwal] = {
                thn_kur: thn_kur,
                kode_mk: kode_mk,
                nama_mk: nama_mk,
                semester: semester,
                sks: sks,
                kelas: kelas,
                jadwal: jadwal,
                dosen: dosen
            }

            res.status(200).json({
                status: 'success',
                message: 'Successfully update mata kuliah',
                data: jadwalKuliah
            });
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getJadwalAll,
    getJadwalById,
    addJadwal,
    deleteJadwal,
    updateJadwal
}