var express = require('express');

express()

    .use('/resources/static', express.static('modules/resources/static'))

    .set('view engine', 'jade')

    .set('views', 'modules/resources/templates')

    .get('/resources/templates/:template', function (request, response) {
      response.render(request.params.template, {

      });
    })

    .get('/', function (request, response) {
      response.send('Home page');
    })

    .listen(process.env.PORT);
