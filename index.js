const express = require('express');
const app = express();
const router = express.Router();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


require('./routes/diningRoutes')(app, router);

app.listen(3000, () => {
    console.log('Connected to the server');
})