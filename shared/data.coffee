request = require('ld-request')
transformers = require('./transformers.coffee')

processArticle = (article) ->
  article.html = article.html?.replace(/http\:\/\/app\.resrc\.it/g, 'http://imgr.io/resrc/t:jpg-progressive')
  article.html = article.html?.replace(/http\:\/\/placehold\.it\/0x0/g, 'http://imgr.io/bkXv1l4RQ/default/100x100')
  article

exports.getArticle = (slug, callback) ->
  request.get "http://api.livingdocs.io/public/publications/#{slug}", (err, data) ->
    return callback(err) if err
    callback(null, processArticle(data.publication))


exports.getArticles = (callback) ->
  request.get "http://api.livingdocs.io/public/publications?space=127", (err, data) ->
    return callback(err) if err
    callback(null, data.publications)


exports.getTeasers = (callback) ->
  exports.getArticles (err, articles) ->
    return callback(err) if err
    callback(null, transformers.articlesToTeasers(articles))
