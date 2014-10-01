$ = require('browserify-zepto')
exports.get = (url, callback) ->
  $.getJSON url, (data) ->
    return callback(new Error(data.error)) if data.error
    callback(null, data)
