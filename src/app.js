import express from 'express';

import funcionesFechas from './time.js'
const days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
const mesesDelAño = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  
const app= express()

app.use(express.json())

const fecha = Date.now();

app.get('/hora', (req, res) => {
    res.send(`${funcionesFechas.SacarFechaActual(fecha)}`)
})


app.get('/day', (req, res) => {
    res.send(`${days[funcionesFechas.diaNombre(fecha)]}`)
})


app.get('/fecha-completa', (req, res) => {
    res.send(`${days[funcionesFechas.diaNombre(fecha)]}  ${funcionesFechas.dia(fecha)} de ${mesesDelAño[funcionesFechas.month(fecha)]} de  ${funcionesFechas.año(fecha)} `)
})

app.get('/', (req, res) => {
    res.send(`Bienvenido al server de Dekel Usach`)
})
export default app;