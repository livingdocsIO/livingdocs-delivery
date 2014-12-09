exports.constructImageUrl = (original) ->
  original = url: original if typeof original is 'string'
  imageId = (original?.url||'').split('amazonaws.com/')[1]

  if imageId
    style = "c:#{c.x}x#{c.y}x#{c.width}x#{c.height}-t:jpg-progressive" if c = original.crop
    return "http://imgr.io/livingdocs/#{style}/#{imageId}"

  original?.url || original.originalUrl


exports.deduceTitleFromData = (content) ->
  for snippet in content
    for type in ['hero', 'head', 'title']
      return snippet.content.title if snippet.identifier == "timeline.#{type}" && snippet.content.title?


exports.deduceTeaserImageFromData = (content) ->
  for snippet in content
    for type in ['hero', 'fullsize', 'normal', 'peephole']
      return snippet.content.image if snippet.identifier == "timeline.#{type}" && snippet.content.image?


exports.articlesToTeasers = (articles) ->
  for art in articles
    title: art.metadata?.title || exports.deduceTitleFromData(art.data.content)
    teaserImage: exports.constructImageUrl(art.metadata?.teaser_image || exports.deduceTeaserImageFromData(art.data.content))
    articleId: art.slug || art.document_id
