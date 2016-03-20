_ = require('lodash')
conf = require('../conf')
dataSource = require('./data.coffee')


getDependencies = (metadata) ->
  jsCode = []
  jsUrls = []
  cssUrls = []
  cssCode = []
  for type, dependencies of metadata.dependencies
    continue if _.isEmpty(dependencies)
    if type == 'js'
     codeContainer = jsCode
     urlContainer = jsUrls
    else if type == 'css'
      codeContainer = cssCode
      urlContainer = cssUrls
    else
      console.error "Unknown dep type #{type}"

    for dependency in dependencies
      urlContainer.push(dependency.src) if dependency.src?
      codeContainer.push(dependency.code) if dependency.code?

  {jsCode, jsUrls, cssCode, cssUrls}


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
    dependencies = getDependencies(article.metadata)
    ctx.render 'article.html',
      html: article.html
      title: article.metadata?.title
      description: article.metadata?.description
      author: article.metadata?.author
      teaserImage: article.metadata?.teaserImage?.url
      dependencies: dependencies
