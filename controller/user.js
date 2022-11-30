const client = require("../config/db")

exports.login = (req,res)=>{
    const username = req.body.username
    const password = req.body.password

    client.query(`SELECT * FROM users WHERE username='${username}'`, (err, doc) => {
        err ? res.send(err) : ""
        if(doc.rows[0]){
            if(doc.rows[0].password === password){
                req.session.isAuthenticated="true"
                res.redirect("/halaman/semua-pelanggan")
            }else{
                console.log("Wrong Password")
                res.redirect("/halaman/login")
            }
        }else{
            console.log("User not Found")
            res.redirect("/halaman/login")
        }
    })
}

exports.register = (req,res)=>{
    const username = req.body.username
    const password = req.body.password

    client.query(`INSERT INTO users VALUES('${username}',${email},${password})`, (err, doc) => {
        err ? res.send(err) : ""
        if(doc.rows[0]){
            if(doc.rows[0].password === password){
                res.redirect("/halaman/login")
            }else{
                console.log("Wrong Password")
                res.redirect("/halaman/login")
            }
        }else{
            console.log("User not Found")
            res.redirect("/halaman/login")
        }
    })
}

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (!err) {
            res.redirect('/halaman/login')
        }
    })
}