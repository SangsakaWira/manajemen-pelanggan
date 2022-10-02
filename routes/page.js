const express = require("express")
const router = express.Router()

// IMPORT KONTROLLER
const pageController = require("../controller/page")

// PAGE PELANGGAN
router.get("/semua-pelanggan", pageController.getAllPelanggan)
router.get("/detail-pelanggan/:id_pelanggan", pageController.getPelangganById)
router.get("/tambah-pelanggan", pageController.tambahPelanggan)
router.get("/update-pelanggan/:id", pageController.updatePelanggan)

// PAGE PRODUk

module.exports = router