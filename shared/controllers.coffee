dataSource = require('./data.coffee')

exports.articles = (ctx, next) ->
  dataSource.getTeasers (err, articles) ->
    return next(err) if err
    ctx.render('articles.html', title: 'Livingdocs articles', articles: articles)


exports.article = (ctx, next) ->
  dataSource.getArticle ctx.params.slug, (err, article) ->
    return next(err) if err
    ctx.render('article.html', title: article.title, article: article)


exports.articleRaw = (ctx, next) ->
  dataSource.getArticle ctx.params.slug, (err, article) ->
    return next(err) if err
    ctx.render('raw.html', content: article.html)
