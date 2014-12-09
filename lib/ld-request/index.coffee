superagent = require('superagent')

exports.get = (url, callback) ->
  superagent.get(url).end (res) ->
    if res.body?.error
      error = new Error(res.body.error)
      return callback(error)

    callback(null, res.body)
