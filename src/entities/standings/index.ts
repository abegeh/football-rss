export class Standings {
  _position: number
  _clubName: string
  _crestUrl: string
  _playedGames: number
  _won: number
  _draw: number
  _lost: number
  _points: number
  _goalsFor: number
  _goalsAgainst: number
  _goalDifference: number

  constructor(
    position: number,
    clubName: string,
    crestUrl: string,
    playedGames: number,
    won: number,
    draw: number,
    lost: number,
    points: number,
    goalsFor: number,
    goalsAgainst: number,
    goalDifference: number
  ) {
    this._position = position
    this._clubName = clubName
    this._crestUrl = crestUrl
    this._playedGames = playedGames
    this._won = won
    this._draw = draw
    this._lost = lost
    this._points = points
    this._goalsFor = goalsFor
    this._goalsAgainst = goalsAgainst
    this._goalDifference = goalDifference
  }
}
