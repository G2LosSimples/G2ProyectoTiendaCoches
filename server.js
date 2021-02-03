const express = require ("express"); 
const exphbs = require ("express-handlebars"); 
const app = express(); 
const morgan = require ("morgan");

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
app.use(express.static("public"));
app.use(require("./routes/index.Routes"));
app.use(require("./routes/creation.Routes"));
app.listen(3000);


