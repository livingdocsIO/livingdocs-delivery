conf = require('../conf')
dataSource = require('./data.coffee')

exports.articles = (ctx, next) ->
  if conf.start_page_document
    ctx.params.slug = conf.start_page_document
    return exports.article(ctx, next)
  else
    dataSource.getTeasers (err, articles) ->
      return next(err) if err
      ctx.render('articles.html', title: 'Livingdocs articles', articles: articles)


exports.article = (ctx, next) ->
  dataSource.getArticle ctx.params.slug, (err, article) ->
    return next(err) if err
    ctx.render 'article.html',
      html: article.html
      title: article.data.metadata?.title
      description: article.data.metadata?.description
      author: article.data.metadata?.author
      teaserImage: article.data.metadata?.teaserImage?.url

