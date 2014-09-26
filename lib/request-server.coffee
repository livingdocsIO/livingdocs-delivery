superagent = require('superagent')

exports.get = (url, callback) ->
  superagent.get(url).end(callback)
