const http = require('http');

const server = http.createServer((request, response) => {

    if (request.url === '/profile') {
        response.write('Halaman Profile');
    } else {
        response.write('Halaman Lain');
    }

    response.end();
})

server.listen(3000);
