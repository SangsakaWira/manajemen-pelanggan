require('dotenv').config()

const express = require("express")
const bodyParser = require("body-parser")

// ROUTES
const pageRouter = require("./routes/page")
const pelangganRouter = require("./routes/pelanggan")

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.set('view engine', 'ejs')

// PRODUCTS
app.get("/",(req,res)=>{
    res.redirect("/halaman/semua-pelanggan")
})

app.use("/halaman",pageRouter)
app.use("/pelanggan",pelangganRouter)

app.listen(3000, (err) => {
    if (err) {
        console.log("Error is happening")
    }
    console.log("Server is running!")
})