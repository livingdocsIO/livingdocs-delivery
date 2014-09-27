superagent = require('superagent')

exports.get = (url, callback) ->
  superagent.get(url).end (res) ->
    return callback(new Error(res.body.error)) if res.body?.error
    callback(null, res.body)
