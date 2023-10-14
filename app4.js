
const express = require('express')
const app = express()

app.get('/',function(req, res){
    res.send('Hola mundo')
})

app.listen(8080);
console.log('Escuchado el puerto 8080 app4');