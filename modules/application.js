var express = require('express');

express()

    .use('/resources/static', express.static('modules/resources/static'))

    .set('view engine', 'jade')

    .set('views', 'modules/resources/templates')

    .get('/resources/templates/:template(*).(htm|html)', function (request, response) {
      response.render(request.params.template, {
        application: {
          title: "nodejs-express-example"
        }
      });
    })

    .get('/resources/models/example.json', function (request, response) {
      response.json({
        application: {
          title: "nodejs-express-example"
        }
      });
    })

    .get('/(*)', function (request, response) {
      response.render(index, {
        application: {
          title: "nodejs-express-example"
        },
        system: {
          base: "/"
        }
      });
    })

    .listen(process.env.PORT);
