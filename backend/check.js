const http = require('http');

http.get('http://localhost:5000', (res) => {
    console.log(`Servidor responde desde puerto 5000`);
}).on('error', (err) => {
    console.error(`Servidor NO responde en puerto 5000`);
});