_ = require('underscore')

module.exports =

  # normalizes a slug based on a char mapping
  # removes not specified characters
  # example:
  #   a_url_with_ä becomes a-url-with-ae
  normalizeSlug: (slug) ->
    slug = slug
      .toLowerCase()
      .trim()
      # replace whitespace(s) with one dash
      .replace(/[\s]+/g, '-')

    # map slug by charMap and allowed characters | remove if char is not allowed
    slug = _.map(slug, (char) =>
        return @slugCharMap[char] if @slugCharMap[char]?
        return char if char.match(/[a-z0-9\-]/)
        ""
      ).join("")
    # replace multiple dashes with one
    slug = slug.replace(/[-]+/g, '-')

    slug

  #nzz specific slug transformations
  slugCharMap:
    "à": "a"
    "á": "a"
    "â": "a"
    "ã": "a"
    "ä": "ae"
    "å": "a"
    "æ": "ae"
    "ā": "a"
    "ç": "c"
    "è": "e"
    "é": "e"
    "ê": "e"
    "ë": "e"
    "ē": "e"
    "ì": "i"
    "í": "i"
    "î": "i"
    "ï": "i"
    "ī": "i"
    "ñ": "n"
    "ò": "o"
    "ó": "o"
    "ô": "o"
    "õ": "o"
    "ö": "oe"
    "ø": "o"
    "ō": "o"
    "œ": "oe"
    "ù": "u"
    "ú": "u"
    "û": "u"
    "ũ": "u"
    "ü": "ue"
    "ū": "u"
    "ý": "y"
    "ÿ": "ye"
    "š": "s"
    "ß": "ss"
    "—": "-"
    "_": "-"
