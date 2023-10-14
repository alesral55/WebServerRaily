

const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public'))

app.get('/hola-mundo', (req, res ) => {
    res.send('Hola mundo en su respectiva ruta')
})

app.get('*', (req, res)=> {
    res.send('404 | Page not Found')
})

app.listen(port, ()=>{
    console.log(`Ejemplo app listen at http://localhost:${port}`)
})