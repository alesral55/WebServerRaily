
const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public2'))

app.get('/generic', (req, res ) => {
    res.sendFile(__dirname + '/public2/generic.html')
})

app.get('/elements', (req, res ) => {
    res.sendFile(__dirname + '/public2/elements.html')
})

app.get('/hola-mundo', (req, res ) => {
    res.send('Hola mundo en su respectiva ruta')
})

app.get('*', (req, res)=> {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, ()=>{
    console.log(`Ejemplo app listen at http://localhost:${port}`)
})