var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: '',   //db hostname
    user: '',   //db username
    password: '',   //db password
    database: ''    //db database name
});


module.exports = pool;