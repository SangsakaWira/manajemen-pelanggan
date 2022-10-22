const express = require("express")
const router = express.Router()

const middleware = require("../utility/middleware")

// IMPORT KONTROLLER
const pageController = require("../controller/page")

// PAGE PELANGGAN
router.get("/semua-pelanggan", pageController.getAllPelanggan)
router.get("/detail-pelanggan/:id_pelanggan", pageController.getPelangganById)
router.get("/tambah-pelanggan", middleware.isAdmin, pageController.tambahPelanggan)
router.get("/update-pelanggan/:id",middleware.isAdmin, pageController.updatePelanggan)

// PAGE PRODUk

module.exports = router