export class News {
  _source: string
  _sourceName: string
  _title: string
  _pubDate: string
  _pubDateTime: any
  _link: string
  _content: string
  _sourceLogo: string
  _sourceLanguage: string
  _mediaUrl: string
  _contentEncoded: string

  constructor(
    source: string,
    sourceName: string,
    title: string,
    pubDate: string,
    pubDateTime: any,
    link: string,
    content: string,
    sourceLogo: string,
    sourceLanguage: string,
    mediaUrl: string = '',
    contentEncoded: string = ''
  ) {
    this._source = source
    this._sourceName = sourceName
    this._title = title
    this._pubDate = pubDate
    this._pubDateTime = pubDateTime
    this._link = link
    this._content = content
    this._sourceLogo = sourceLogo
    this._sourceLanguage = sourceLanguage
    this._mediaUrl = mediaUrl
    this._contentEncoded = contentEncoded
  }
}
