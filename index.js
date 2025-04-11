import chalk from "chalk";
import express from "express";

const app= express()
const port = 3000;

app.use(express.json())

const nombres = [{
    nombre: "Dekel",
    apellido: "Usach"
}]

app.get('/', (req, res) => {
    res.json("no hay nada bro")
})

app.post('/nombres', (req, res) => {
    const persona = req.body;
    nombres.push(persona);
    res.status(201).json({ mensaje: "nombre agregado", persona });
});


app.listen(port, () => {
    console.log(chalk.blueBright(`Servidor escuchando en http://localhost:${port}`));
});


