const client = require("../config/db")
const pelanggan = require("../model/pelanggan")

exports.getAllPelanggan = (req, res) => {
    client.query('SELECT * FROM pelanggan', (err, doc) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.send(doc.rows)
        }
    })
}

exports.getPelangganById = (req, res) => {
    const id = req.params.id_pelanggan
    client.query(`SELECT * FROM pelanggan WHERE id=${id} `, (err, doc) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.send(doc.rows)
        }
    })
}

exports.createPelanggan = (req, res) => {
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
}

exports.deleteById = (req, res) => {
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
}

exports.updateById = (req, res) => {
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
}