request = require('ld-request')
conf = require('../conf')
transformers = require('./transformers.coffee')

exports.getArticle = (slug, callback) ->
  request.get "#{conf.api_host}/public/publications/#{slug}", (err, data) ->
    return callback(err) if err
    callback(null, data.publication)


exports.getArticles = (callback) ->
  request.get "#{conf.api_host}/public/publications?space=#{conf.space_id}", (err, data) ->
    return callback(err) if err
    callback(null, data.publications)


exports.getTeasers = (callback) ->
  exports.getArticles (err, articles) ->
    return callback(err) if err
    callback(null, transformers.articlesToTeasers(articles))
