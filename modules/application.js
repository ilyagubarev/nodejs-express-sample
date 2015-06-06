var express = require('express');

express()

    .use('/resources/static', express.static('modules/resources/static'))

    .set('view engine', 'jade')

    .set('views', 'modules/resources/templates')

    .get('/resources/templates/:template(*).html', function (request, response) {
      response.render(request.params.template, {
        application: {
          title: "nodejs-express-example"
        }
      });
    })

    .get('/', function (request, response) {
      response.send('Home page');
    })

    .listen(process.env.PORT);
