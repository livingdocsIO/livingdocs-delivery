url = require('../lib/url')


exports.deduceTitleFromData = (content) ->
  for snippet in content
    for type in ['hero', 'head', 'title']
      return snippet.content.title if snippet.identifier == "timeline.#{type}" && snippet.content.title?


exports.articlesToTeasers = (articles) ->
  for art in articles
    url: art.slug || "/articles/"+ url.normalizeSlug(art.metadata?.title || exports.deduceTitleFromData(art.content)) + "-#{art.document_id}"
    title: art.metadata?.title
    teaserImage: art.metadata?.teaserImage?.url
