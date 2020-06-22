import * as _ from 'lodash'
import axios from 'axios'
import { Standings } from '../entities/standings'
import { Events } from '../entities/events'
import { Fixture } from '../entities/fixtures'
import { FIXTURE_URL, API_OPTIONS, SEASON_TIME_START, STANDING_URL, EVENTS_URL } from '../config'

export async function getFixtures(id: number): Promise<Fixture[]> {
    const fixtureResult: Fixture[] = new Array()
    const fixtureUrl = FIXTURE_URL + id
    const fixtureResponse = await axios.get(fixtureUrl, API_OPTIONS)
    for (const item of fixtureResponse.data.api.fixtures) {
        if (SEASON_TIME_START < item.event_timestamp * 1000) {
            fixtureResult.push(
                new Fixture(
                    item.league.name,
                    item.league.logo,
                    item.fixture_id,
                    item.event_date,
                    item.event_timestamp * 1000,
                    item.goalsHomeTeam === null ? -1 : item.goalsHomeTeam,
                    item.goalsAwayTeam === null ? -1 : item.goalsAwayTeam,
                    item.homeTeam.logo,
                    item.awayTeam.logo,
                    item.homeTeam.team_name,
                    item.awayTeam.team_name,
                    item.homeTeam.team_id,
                    item.awayTeam.team_id,
                    item.statusShort,
                    item.score.halftime,
                    item.score.fulltime,
                    item.score.extratime,
                    item.score.penalty,
                    item.round
                )
            )
        }
    }
    return fixtureResult
}

export async function getStanding(id: number): Promise<Standings[]> {
    const standingResult: Standings[] = new Array()
    const standingUrl = STANDING_URL + id
    const standingResponse = await axios.get(standingUrl, API_OPTIONS)

    for (const item of standingResponse.data.api.standings[0]) {
        standingResult.push(
            new Standings(
                item.rank,
                item.teamName,
                item.logo,
                item.all.matchsPlayed,
                item.all.win,
                item.all.draw,
                item.all.lose,
                item.points,
                item.all.goalsFor,
                item.all.goalsAgainst,
                item.goalsDiff
            )
        )
    }

    return standingResult
}

export async function getEvents(fixtureId: number): Promise<Events[]> {
    const eventResult: Events[] = new Array()
    const eventUrl = EVENTS_URL + fixtureId
    const eventResponse = await axios.get(eventUrl, API_OPTIONS)

    for (const item of eventResponse.data.api.events) {
        eventResult.push(
            new Events(
                item.elapsed,
                item.team_id,
                item.teamName,
                item.player_id,
                item.player,
                item.assist_id,
                item.assist,
                item.type,
                item.detail
            )
        )
    }

    return eventResult
}
