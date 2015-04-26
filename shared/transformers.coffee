url = require('../lib/url')


exports.deduceTitleFromData = (content) ->
  for snippet in content
    for type in ['hero', 'head', 'title']
      return snippet.content.title if snippet.identifier == "timeline.#{type}" && snippet.content.title?


exports.articlesToTeasers = (articles) ->
  for art in articles
    url: art.slug || "/articles/"+ url.normalizeSlug(art.data.metadata?.title || exports.deduceTitleFromData(art.data.content)) + "-#{art.document_id}"
    title: art.data.metadata?.title || exports.deduceTitleFromData(art.data.content)
    teaserImage: art.data.metadata?.teaserImage?.url
