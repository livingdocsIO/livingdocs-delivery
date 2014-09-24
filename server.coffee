express = require('express')
app = express()

nunjucks = require('nunjucks').configure "#{__dirname}/views",
  autoescape: false
  watch: process.env.NODE_ENV != 'production'

nunjucks.express(app)

controllers = require('./controllers')

app.use('/components', express.static("#{__dirname}/components"))
app.use('/assets', express.static("#{__dirname}/assets"))
app.get('/', controllers.articles)
app.get('/articles/:slug', controllers.article)
app.get('/articles/:slug/raw', controllers.articleRaw)

app.listen (process.env.PORT || '8080'), (err) ->
  console.log('Server started on http://localhost:8080')
