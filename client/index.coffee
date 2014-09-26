page = require('../components/page.js/index')
Nunjucks = require('nunjucks')
nunjucks = new Nunjucks.Environment(new Nunjucks.WebLoader('/views'))

controllers = require('../shared/controllers.coffee')

page.Context.prototype.render = (view, locals) ->
  nunjucks.render view, locals, (err, html) ->
    return alert('Failed to render the view') if err
    $('body').html(html)


$(document).ready () ->

  page('/', controllers.articles)
  page('/articles', controllers.articles)
  page('/articles/:slug', controllers.article)

  $('a[internal]').click (evt) ->
    evt.preventDefault()
    page($(this).attr('href'))
