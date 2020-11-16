// @ts-nocheck
const fs = require('fs');
let chirps = { nextid: 0 };

if(fs.existsSync('chirps.json')) {
    chirps = JSON.parse(fs.readFileSync('chirps.json'));
}

let getChirps = () => {
        con.query("SELECT * FROM chirps", function (err, result, fields) {
                if (err) throw err;
                console.log(result);
         });
        
}

let getChirp = id => {
    con.query(`SELECT * FROM chirps WHERE id = ${id} `, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
 });
    
}

let createChirp = (chirp) => {
    con.query(`insert into Chirps (userid, content) values ${chirp}`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
 });
};

let updateChirp = (id, chirp) => {
    con.query(`UPDATE chirps SET content = ${chirp} WHERE id = ${id}`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
});
};

let deleteChirp = id => {
    con.query(`DELETE FROM Chirps where id = ${id}`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
});
};


module.exports = {
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp
}