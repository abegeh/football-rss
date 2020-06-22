export class Events {
  _elapsed: string
  _teamId: number
  _teamName: string
  _playerId: number
  _player: string
  _assistId: number
  _assist: string
  _type: string
  _detail: string

  constructor(
    elapsed: string,
    teamId: number,
    teamName: string,
    playerId: number,
    player: string,
    assistId: number,
    assist: string,
    type: string,
    detail: string
  ) {
    this._elapsed = elapsed
    this._teamId = teamId
    this._teamName = teamName
    this._playerId = playerId
    this._player = player
    this._assistId = assistId
    this._assist = assist
    this._type = type
    this._detail = detail
  }
}
