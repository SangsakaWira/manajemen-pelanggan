const express = require("express")
const userController = require("../controller/user")
const router = express.Router()

// Routes Users
router.post("/login", userController.login)
router.get("/logout", userController.logout)

module.exports = router