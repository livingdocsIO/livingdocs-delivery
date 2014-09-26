express = require('express')
Nunjucks = require('nunjucks')
path = require('path')

app = express()
root = path.join(__dirname, '..')

nunjucks = Nunjucks.configure "#{root}/views",
  autoescape: false
  watch: process.env.NODE_ENV != 'production'

nunjucks.express(app)

map = (controller) ->
  (req, res, next) ->
    context =
      path: req.path
      params: req.params
      render: res.render.bind(res)
      locals: {}

    controller(context, next)

app.use(require('compression')())
app.use('/components', express.static("#{root}/components"))
app.use('/assets', express.static("#{root}/assets"))
app.use('/views', express.static("#{root}/views"))

controllers = require('../shared/controllers')
app.get('/', map(controllers.articles))
app.get('/articles', map(controllers.articles))
app.get('/articles/:slug', map(controllers.article))
app.get('/articles/:slug/raw', map(controllers.articleRaw))

app.listen (process.env.PORT || '8080'), (err) ->
  console.log('Server started on http://localhost:8080')
