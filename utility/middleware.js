const client = require("../config/db")

exports.isAdmin = (req,res,next) =>{
    client.query(`SELECT * FROM users WHERE id=1 `, (err, doc) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(doc.rows[0].role)
            if(doc.rows[0].role === 1){
                next()
            }else{
                return res.redirect("back")
            }
        }
    })
}

exports.isAuthenticated = (req,res,next) =>{
    
}