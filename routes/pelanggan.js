const express = require("express")
const pelangganController = require("../controller/pelanggan")
const router = express.Router()

const middleware = require("../utility/middleware")

// Routes Pelanggan
router.get("/", pelangganController.getAllPelanggan)
router.get("/:id_pelanggan", pelangganController.getPelangganById)
router.post("/", pelangganController.createPelanggan)
router.get("/delete/:id",middleware.isAdmin, pelangganController.deleteById)
router.post("/update", pelangganController.updateById)

module.exports = router