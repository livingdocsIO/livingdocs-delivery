$ = require('browserify-zepto')
page = require('../components/page.js/index')
Nunjucks = require('../components/nunjucks/browser/nunjucks-slim.min.js')
nunjucks = new Nunjucks.Environment(new Nunjucks.WebLoader('/views', true))

controllers = require('../shared/controllers.coffee')

page.Context.prototype.render = (view, locals) ->
  nunjucks.render view, locals, (err, html) ->
    return alert('Failed to render the view') if err
    $('.livingdocs-blog-content').html(html)


$(document).ready () ->

  page('/', controllers.articles)
  page('/articles', controllers.articles)
  page('/articles/:slug', controllers.article)
  page()

  $(document).on 'click', 'a[internal]', (evt) ->
    evt.preventDefault()
    page($(this).attr('href'))
