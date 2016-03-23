url = require('../lib/url')

exports.articlesToTeasers = (articles) ->
  for art in articles
    url: "/articles/#{art.id}"
    title: art.metadata?.title
    teaserImage: art.metadata?.teaserImage?.url
