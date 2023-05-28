const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('../routes/router');

app.use(bodyParser.json());

app.use('/', route);

mongoose.connect("mongodb+srv://SofiyanSayyed:hsxRh6DS5ZlfI1Kj@cluster0.lnyemj3.mongodb.net/Sofiyan_1303", {
    useNewUrlParser: true
})
.then(()=> console.log("mongodb connected succefully"))
.catch((err) => console.log(err))


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

