const express = require("express")
const router = express.Router()

const middleware = require("../utility/middleware")

// IMPORT KONTROLLER
const pageController = require("../controller/page")

// PAGE PELANGGAN
router.get("/semua-pelanggan", middleware.isAuthenticated, pageController.getAllPelanggan)
router.get("/detail-pelanggan/:id_pelanggan", middleware.isAuthenticated, pageController.getPelangganById)
router.get("/tambah-pelanggan", middleware.isAuthenticated, pageController.tambahPelanggan)
router.get("/update-pelanggan/:id", middleware.isAuthenticated, pageController.updatePelanggan)

// PAGE AUTH
router.get("/login",(req,res,next)=>{
    if(req.session.isAuthenticated){
        return res.redirect("/")
    }else{
        next()
    }
}, pageController.login)
router.get("/register", pageController.register)

module.exports = router