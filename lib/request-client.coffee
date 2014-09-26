jsonp = require('jsonp')

exports.get = (url, callback) ->
  console.log(url)
  jsonp url: url, {}, (res) ->
    console.log res
    # callback(null, body)
