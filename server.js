const express = require ("express"); 
const exphbs = require ("express-handlebars"); 
const app = express(); 
const morgan = require ("morgan");
const carRouter = require ("./routers_2_VentaCocheNuevo/carRouter");
const indexRouter = require("./routers_2_VentaCocheNuevo/indexRouter");

require("./connection");

app.engine("hbs",exphbs({
    partialsDir:__dirname+"/views/partials", 
    layoutsDir: __dirname+"/views/layouts",
    extname: "hbs" 
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "hbs");
app.use(morgan("dev")); 
app.use(indexRouter);
app.use(carRouter);
app.use(express.static("public"));
app.listen(3000);


