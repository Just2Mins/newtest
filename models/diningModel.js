const executeQuery = require('../utils/db.js').executeQuery;

const getRVC = async function (hotel_code) {
    const query = 'SELECT * FROM revenue_centres where property_id =' + hotel_code;
    try {
        return await executeQuery(query);
    } catch (err) {
        return err;
    }
};

module.exports = {
    getRVC
}