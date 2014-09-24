express = require('express')
app = express()
Nunjucks = require('nunjucks')
nunjucks = Nunjucks.configure "#{__dirname}/views",
  autoescape: false
  watch: process.env.NODE_ENV != 'production'

nunjucks.express(app)

controllers = require('./lib/controllers')

map = (controller) ->
  (req, res, next) ->
    context =
      path: req.path
      params: req.params
      render: res.render.bind(res)
      locals: {}

    controller(context, next)


app.use('/components', express.static("#{__dirname}/components"))
app.use('/assets', express.static("#{__dirname}/assets"))
app.use('/views', express.static("#{__dirname}/views"))
# app.get '/views', (req, res, next) ->
#   body = Nunjucks.precompile("./views", { env: nunjucks })
#   res.set('content-type', 'application/javascript')
#   res.send(200, body)

app.get('/', map(controllers.articles))
app.get('/articles', map(controllers.articles))
app.get('/articles/:slug', map(controllers.article))
app.get('/articles/:slug/raw', map(controllers.articleRaw))

app.listen (process.env.PORT || '8080'), (err) ->
  console.log('Server started on http://localhost:8080')
