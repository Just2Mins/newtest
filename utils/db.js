const pool = require('./dbconnect');

module.exports = {

    executeQuery(dbQuery, query_data) {
        console.log('************', dbQuery);
        return new Promise(
            function (resolve, reject) {
                pool.getConnection(function (err, connection) {
                    if (err) {
                        console.log('query is ----*', this.sql);

                        console.log('Database error :', err);
                        reject(err);
                    } else {

                        connection.query(dbQuery, query_data, function (err, results) {
                            if (err) {
                                console.log('query is ----*', this.sql);

                                console.log('Database error :', err);
                                reject(err);
                            } else {
                                console.log('query is ----*', this.sql);
                                resolve(results);
                            }
                            connection.release();
                        });

                    }

                })

            }
        )

    }
}