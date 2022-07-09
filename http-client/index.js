const https = require('https');

const url = 'https://api.genderize.io/?name=sam';

const request = https.request(
    url,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    },
    function (response) {
        response.addListener('data', function (data) {
            console.info(data.toString());
        });
    }
);

request.end();