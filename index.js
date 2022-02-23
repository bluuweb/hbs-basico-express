const express = require("express");
const { create } = require("express-handlebars");

const app = express();

// configurar partials handlebars
const hbs = create({
    partialsDir: ["views/partials"],
    extname: ".hbs",
});

// motor de plantilla express
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

// middleware
app.use(express.static(__dirname + "/public"));
app.use(
    "/css/bootstrap.min.css",
    express.static(
        __dirname + "/node_modules/bootstrap/dist/css/bootstrap.min.css"
    )
);
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));

app.get("/", (req, res) => {
    res.render("home", {
        titulo: "Esta es la página de inicio",
    });
});

app.get("/carrito", (req, res) => {
    res.render("carrito", {
        frutas: ["manzana", "pera", "banana"],
    });
});

app.get("/nosotros", (req, res) => {
    // const equipo = ["Claudia", "Javiera", "Pedro"];
    // const equipo = [];
    const equipo = [
        { nombre: "Claudia" },
        { nombre: "Javiera" },
        { nombre: "Pedro" },
    ];
    res.render("nosotros", {
        equipo: equipo,
    });
});

app.get("/contacto", (req, res) => {
    res.render("contacto", {
        usuario: {
            nombre: "Ignacio",
            estado: false,
        },
    });
});

app.listen(5000, () => console.log("servidor andando 🎉🎉🎉"));
