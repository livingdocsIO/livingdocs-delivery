request = require('ld-request')
transformers = require('./transformers.coffee')

exports.getArticle = (slug, callback) ->
  request.get "http://api.livingdocs.io/public/publications/#{slug}", (err, data) ->
    return callback(err) if err
    callback(null, data.publication)


exports.getArticles = (callback) ->
  request.get "http://api.livingdocs.io/public/publications?space=127", (err, data) ->
    return callback(err) if err
    callback(null, data.publications)


exports.getTeasers = (callback) ->
  exports.getArticles (err, articles) ->
    return callback(err) if err
    callback(null, transformers.articlesToTeasers(articles))
