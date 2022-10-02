const express = require("express")
const pelangganController = require("../controller/pelanggan")
const router = express.Router()

// Routes Pelanggan
router.get("/", pelangganController.getAllPelanggan)
router.get("/:id_pelanggan", pelangganController.getPelangganById)
router.post("/", pelangganController.createPelanggan)
router.get("/delete/:id", pelangganController.deleteById)
router.post("/update", pelangganController.updateById)

module.exports = router