export class Fixture {
  _competitionName: string
  _competitionLogo: string
  _fixture_id: number
  _matchDate: number
  _matchDateTime: number
  _homeFullTimeScore: number
  _awayFullTimeScore: number
  _homeCrestUrl: string
  _awayCrestUrl: string
  _homeName: string
  _awayName: string
  _homeId: number
  _awayId: number
  _status: string
  _halftimeScore: string
  _fulltimeScore: string
  _extratimeScore: string
  _penaltyScore: string
  _round: string

  constructor(
    competitionName: string,
    competitionLogo: string,
    fixture_id: number,
    matchDate: number,
    matchDateTime: number,
    homeFullTimeScore: number,
    awayFullTimeScore: number,
    homeCrestUrl: string,
    awayCrestUrl: string,
    homeName: string,
    awayName: string,
    homeId: number,
    awayId: number,
    status: string,
    halftimeScore: string,
    fulltimeScore: string,
    extratimeScore: string,
    penaltyScore: string,
    round: string
  ) {
    this._competitionName = competitionName
    this._competitionLogo = competitionLogo
    this._fixture_id = fixture_id
    this._matchDate = matchDate
    this._matchDateTime = matchDateTime
    this._homeFullTimeScore = homeFullTimeScore
    this._awayFullTimeScore = awayFullTimeScore
    this._homeCrestUrl = homeCrestUrl
    this._awayCrestUrl = awayCrestUrl
    this._homeName = homeName
    this._awayName = awayName
    this._homeId = homeId
    this._awayId = awayId
    this._status = status
    this._halftimeScore = halftimeScore
    this._fulltimeScore = fulltimeScore
    this._extratimeScore = extratimeScore
    this._penaltyScore = penaltyScore
    this._round = round
  }

}
