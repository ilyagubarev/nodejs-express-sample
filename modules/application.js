var express = require('express');

express()

    .use('/resources/static', express.static('modules/resources/static'))

    .get('/', function (request, response) {
      response.send('Home page');
    })

    .listen(process.env.PORT);
