const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'ball'
});

db.connect(err => {
    if (err) {console.log(err)}
    else (console.log('DB online'))
});

module.exports = db;