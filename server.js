require('dotenv').config()

const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')
const sessions = require('express-session')
const SequelizeStore = require("connect-session-sequelize")(sessions.Store);
const sequelize = require("./config/database")

let port_number = process.env.PORT || 8080

// ROUTES
const pageRouter = require("./routes/page")
const pelangganRouter = require("./routes/pelanggan")
const userRouter = require("./routes/users")

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({
    extended: true
}))

//session middleware
app.use(sessions({
    secret: "thisissecret",
    saveUninitialized: true,
    cookie: {
        maxAge: 10000000
    },
    resave: false
}));

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.redirect("/halaman/semua-pelanggan")
})

app.use("/halaman", pageRouter)
app.use("/pelanggan", pelangganRouter)
app.use("/users", userRouter)

app.listen(port_number, (err) => {
    if (err) {
        console.log("Error is happening")
    }
    console.log("Server is running!")
})