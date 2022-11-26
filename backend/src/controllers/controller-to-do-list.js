const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    getDataToDoListUser(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT dl.id_user, u.nama_user, l.text_list
                FROM users u JOIN detail_list dl ON u.id_user = dl.id_user
                JOIN list l ON dl.id_list = l.id_list;
                `
                , function (error, results) {
                    // if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Berhasil ambil data!',
                        data: results
                    });
                });
            connection.release();
        })
    },
}

