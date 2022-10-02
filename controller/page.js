const client = require("../config/db")

exports.getAllPelanggan = (req, res) => {
    client.query('SELECT * FROM pelanggan', (err, doc) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.render("home", {
                pelanggan: doc.rows
            })
        }
    })
}
exports.getPelangganById = (req, res) => {
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
}
exports.tambahPelanggan = (req, res) => {
    res.render('tambah-pelanggan')
}
exports.updatePelanggan = (req, res) => {
    client.query(`SELECT * FROM pelanggan WHERE id=${req.params.id} `, (err, doc) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.render('update-pelanggan', {
                singlePelanggan: doc.rows[0]
            })
        }
    })
}