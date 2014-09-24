request = require('superagent')
transformers = require('./transformers.coffee')

processArticle = (article) ->
  article.html = article.html?.replace(/http\:\/\/app\.resrc\.it\/https\:\/\/livingdocs\-images\-dev\.s3\.amazonaws\.com\//g, 'http://suitart.gallery/images/bkXv1l4RQ/s:1000x1000/')
  article

exports.getArticle = (slug, callback) ->
  request.get "http://staging.api.livingdocs.io/publications/public/#{slug}", ({body}) ->
    return callback(new Error(body.error)) if body?.error
    callback(null, processArticle(body.publication))


exports.getArticles = (callback) ->
  request.get "http://staging.api.livingdocs.io/publications/public", ({body}) ->
    return callback(new Error(body.error)) if body?.error
    callback(null, body.publications)


exports.getTeasers = (callback) ->
  exports.getArticles (err, articles) ->
    return callback(err) if err
    callback(null, transformers.articlesToTeasers(articles))
