request = require('ld-request')
transformers = require('./transformers.coffee')

processArticle = (article) ->
  article.html = article.html?.replace(/http\:\/\/app\.resrc\.it\/https\:\/\/livingdocs\-images\-dev\.s3\.amazonaws\.com\//g, 'https://d3iceacr719ubs.cloudfront.net/images/bkXv1l4RQ/s:1600x1500/')
  article.html = article.html?.replace(/http\:\/\/placehold\.it\/0x0/g, 'http://suitart.gallery/default/100x100')
  article

exports.getArticle = (slug, callback) ->
  request.get "http://staging.api.livingdocs.io/publications/public/#{slug}", (err, data) ->
    return callback(err) if err
    callback(null, processArticle(data.publication))


exports.getArticles = (callback) ->
  request.get "http://staging.api.livingdocs.io/publications/public", (err, data) ->
    return callback(err) if err
    callback(null, data.publications)


exports.getTeasers = (callback) ->
  exports.getArticles (err, articles) ->
    return callback(err) if err
    callback(null, transformers.articlesToTeasers(articles))
