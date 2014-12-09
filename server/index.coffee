express = require('express')
Nunjucks = require('nunjucks')
path = require('path')

app = express()
app.disable('x-powered-by')
root = path.join(__dirname, '..')

nunjucks = Nunjucks.configure "#{root}/views",
  autoescape: false
  noWatch: process.env.NODE_ENV == 'production'

nunjucks.express(app)

map = (controller) ->
  (req, res, next) ->
    context =
      path: req.path
      params: req.params
      render: (template, locals) ->
        nunjucks.render template, locals, (err, html) ->
          return next(err) if err
          locals.content = html
          nunjucks.render 'index.html', locals, (err, html) ->
            return next(err) if err
            res.send(html)

    controller(context, next)

app.use(require('compression')())
app.use('/components', express.static("#{root}/components", maxAge: 3600 * 1000 * 24 * 7))
app.use('/assets', express.static("#{root}/assets", maxAge: 3600 * 1000 * 24 * 7))

views = ""
views += Nunjucks.precompile("#{root}/views/#{template}.html", name: "#{template}.html", env: nunjucks) for template in ['article', 'articles']
app.get '/views.js', (req, res) ->
  res.set('content-type', 'application/javascript')
  res.status(200).send(views)


controllers = require('../shared/controllers')
app.get('/', map(controllers.articles))
app.get('/articles', map(controllers.articles))
app.get('/articles/:slug', map(controllers.article))


app.listen (process.env.PORT || '8080'), (err) ->
  console.log('Server started on http://localhost:8080')
