const express = require('express');
const app = express();
const mysql = require("mysql")
var con = mysql.createConnection({
    host: "localhost",
    user: "chirprapp",
    password: "password",
    database: "chirpr2"
});
app.get("/blogs", (req, res) => {

})
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/', (req, res) => {
    con.query("SELECT * FROM mentions", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
     });

})

app.listen(3000, () => console.log("server running"))