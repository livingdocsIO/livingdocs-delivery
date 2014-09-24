request = require('request')

exports.getArticle = (slug, callback) ->
  request
    method: 'get'
    json: true
    url: "http://staging.api.livingdocs.io/publications/public/#{slug}"
  , (err, response, body) ->
    return callback(new Error(body.error)) if body?.error
    callback(err, body.publication)


exports.getArticles = (callback) ->
  request
    method: 'get'
    json: true
    url: "http://staging.api.livingdocs.io/publications/public"
  , (err, response, body) ->
    return callback(new Error(body.error)) if body?.error
    callback(err, body.publications)


constructImageUrl = (original) ->
  imageId = (original||'').split('amazonaws.com/')[1]
  if imageId
    return "http://suitart.gallery/images/bkXv1l4RQ/s:1000x1000/#{imageId}"
  original


deduceTitleFromData = (content) ->
  for snippet in content
    for type in ['hero', 'head', 'title']
      return snippet.content.title if snippet.identifier == "timeline.#{type}" && snippet.content.title?


deduceTeaserImageFromData = (content) ->
  for snippet in content
    for type in ['hero', 'fullsize', 'normal', 'peephole']
      return snippet.content.image if snippet.identifier == "timeline.#{type}" && snippet.content.image?


exports.getTeasers = (callback) ->
  exports.getArticles (err, publications) ->
    return callback(err) if err

    teasers = for publication in publications
      title: publication.metadata?.title || deduceTitleFromData(publication.data.content)
      teaserImage: constructImageUrl(publication.metadata?.teaser_image || deduceTeaserImageFromData(publication.data.content))
      articleId: publication.slug || publication.document_id

    callback(null, teasers)
