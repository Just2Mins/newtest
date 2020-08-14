const Dining = require('../models/diningModel');

exports.fetchRVC = async (req, res) => {
    const rvcData = await Dining.getRVC(req.query.hotel_code);
    res.status(200).json({ data: rvcData })

}