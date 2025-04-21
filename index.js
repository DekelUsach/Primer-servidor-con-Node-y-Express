import chalk from "chalk";
import express from "express";
import SacarFechaActual from "./src/time.js";

const app= express()
const port = 3000;
const fecha = Date.now();
const fechaParse = new Date(fecha)

app.use(express.json())

const days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]


app.get('/hora', (req, res) => {
    res.send(`${SacarFechaActual(fecha)}`)
})

app.get('/day', (req, res) => {
    res.send(`${days[fechaParse.getDay()]}`)
})


app.listen(port, () => {
    console.log(chalk.blueBright(`Servidor escuchando en http://localhost:${port}`));
});


