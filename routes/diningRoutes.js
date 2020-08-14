const diningCTRL = require('../controllers/dining');

module.exports = (app, router) => {

    router.get('/rvc', diningCTRL.fetchRVC);


    app.use('/content/v1/dining/', router)
}