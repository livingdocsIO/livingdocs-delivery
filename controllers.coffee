dataSource = require('./data')

exports.articles = (req, res, next) ->
  dataSource.getTeasers (err, articles) ->
    return next(err) if err
    res.render('articles.html', title: 'Livingdocs articles', articles: articles)


exports.article = (req, res, next) ->
  dataSource.getArticle req.params.slug, (err, article) ->
    return next(err) if err
    res.render('article.html', title: article.title, article: article)


exports.articleRaw = (req, res, next) ->
  dataSource.getArticle req.params.slug, (err, article) ->
    return next(err) if err
    res.render('raw.html', content: article.html)

