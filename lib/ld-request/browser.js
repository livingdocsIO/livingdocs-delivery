var $;

$ = require('browserify-zepto');

exports.get = function(url, callback) {
  return $.getJSON(url, function(data) {
    if (data.error) {
      return callback(new Error(data.error));
    }
    return callback(null, data);
  });
};
