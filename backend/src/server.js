const express = require('express');
const mongoose = require('mongoose');
//const cors = requere('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://edu:edu@cluster0-brd2e.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});

//app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);