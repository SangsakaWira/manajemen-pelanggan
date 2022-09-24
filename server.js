require('dotenv').config()

const {
    Client
} = require('pg')
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const client = new Client({
    user: process.env.USERNAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
})

client.connect()

app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.set('view engine', 'ejs')

// HALAMAN
app.get("/", (req, res) => {
    client.query('SELECT * FROM pelanggan', (err, doc) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.render("home", {
                pelanggan: doc.rows
            })
        }
    })
})

app.get("/halaman/detail-pelanggan/:id_pelanggan", (req, res) => {
    const id = req.params.id_pelanggan
    client.query(`SELECT * FROM pelanggan WHERE id=${id} `, (err, doc) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(doc.rows[0])
            res.render("detail-pelanggan", {
                singlePelanggan: doc.rows[0]
            })
        }
    })
})

app.get("/halaman/tambah-pelanggan", (req, res) => {
    res.render('tambah-pelanggan')
})

app.get("/halaman/update-pelanggan/:id", (req, res) => {
    client.query(`SELECT * FROM pelanggan WHERE id=${req.params.id} `, (err, doc) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.render('update-pelanggan', {
                singlePelanggan: doc.rows[0]
            })
        }
    })
})


app.get("/pelanggan", (req, res) => {
    client.query('SELECT * FROM pelanggan', (err, doc) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.send(doc.rows)
        }
    })
})

app.get("/pelanggan/:id_pelanggan", (req, res) => {
    const id = req.params.id_pelanggan
    client.query(`SELECT * FROM pelanggan WHERE id=${id} `, (err, doc) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.send(doc.rows)
        }
    })
})

app.post("/pelanggan", (req, res) => {
    const {
        id,
        nama,
        alamat,
        email,
        dompet
    } = req.body
    client.query(`INSERT INTO pelanggan VALUES(${id},'${nama}','${alamat}','${email}',${dompet})`, (err, doc) => {
        if (err) {
            res.send({
                err: err
            })
        } else {
            res.redirect("/")
        }
    })
})

app.get("/delete-pelanggan/:id", (req, res) => {
    const {
        id
    } = req.params
    client.query(`DELETE FROM pelanggan WHERE id=${id}`, (err, doc) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.redirect("/")
        }
    })
})

app.post("/update-pelanggan", (req, res) => {
    const {
        id,
        alamat,
        nama,
        dompet,
        email
    } = req.body
    client.query(`UPDATE pelanggan SET nama='${nama}', email='${email}',dompet='${parseInt(dompet)}',alamat='${alamat}' WHERE id=${id};`, (err, doc) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.redirect("/")
        }
    })
})

app.listen(3000, (err) => {
    if (err) {
        console.log("Error is happening")
    }
    console.log("Server is running!")
})