
const http = require('http');

http.createServer((req,res) => {
    res.setHeader('Content-Disposition', 'attachment;filename=lista.csv')
    res.writeHead(200, { 'Content-Type': 'aplication/csv'})
    res.write('id, Nombre\n')
    res.write('1, Antony\n')
    res.write('2, Alessandro\n')
    res.write('3, Ralon\n')
    res.write('4, Valenzuela\n')
    res.end();


})
.listen(8080)

console.log('Escuchando el puerto ', 8080);