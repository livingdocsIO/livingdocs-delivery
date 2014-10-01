exports.constructImageUrl = (original) ->
  original = url: original if typeof original is 'string'
  imageId = (original?.url||'').split('amazonaws.com/')[1]
  if imageId
    style = "s:1000x1000"
    style += "-c:#{c.width}x#{c.height}x#{c.x}x#{c.y}" if c = original.crop
    return "http://suitart.gallery/images/bkXv1l4RQ/#{style}/#{imageId}"
  original?.url || original


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
