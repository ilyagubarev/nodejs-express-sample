var express = require('express');

express()

    .get('/', function (request, response) {
      response.send('Home page');
    })

    .listen(process.env.PORT);

