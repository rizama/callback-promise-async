const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);
    console.log(request.method);

    if (request.method === 'POST') {
        request.addListener('data', function (data) {
            response.setHeader('Content-Type', 'application/json');
            response.write(data);
            response.end();
        });
    } else {
        if (request.url === '/profile') {
            response.write('Halaman Profile');
        } else {
            response.write('Halaman Lain');
        }
        response.end();
    }

});

server.listen(3000);
