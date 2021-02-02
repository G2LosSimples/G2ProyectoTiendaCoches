const mongoose = require("mongoose");

const mongoDB = "mongodb://localhost/Chuletica";

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then (db => console.log("Los Simples se han conectado."))
.catch (error => console.log(error));