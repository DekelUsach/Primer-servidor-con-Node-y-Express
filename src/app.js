
export default bienvenido

const bienvenido = () => {
    app.get('/', (req, res) => {
        res.send(`Bienvenido al server de Dekel Usach`)
    })

}