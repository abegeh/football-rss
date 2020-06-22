import { getFixtures, getStanding } from './services'
import { Fixture } from '../entities/fixtures'
import * as utils from '../utils'
import { Standings } from '../entities/standings'

export const CLUBS_ID: { [index: string]: number } = {
    inter: 505,
    milan: 489
}
export const COMPETITION_ID: { [index: string]: number } = {
    inter: 891,
    milan: 891
}

export async function generateFixtures() {
    for (const id in CLUBS_ID) {
        const fixtureResult: Fixture[] = await getFixtures(
            CLUBS_ID[id]
        )

        const result = fixtureResult.reduce((acc: any, obj: Fixture) => {
            acc[obj._status] = acc[obj._status] || [];
            acc[obj._status].push(obj);
            return acc;
        }, {})

        result["FT"].sort(function (a: Fixture, b: Fixture) {
            const dateA = new Date(a._matchDateTime)
            const dateB = new Date(b._matchDateTime)
            return dateB.getTime() - dateA.getTime()
        })
        for (const status in result) {
            await utils.firebaseSaveAll(
                id + "/rss_fixtures/" + status,
                result[status]
            );
        }
    }
}

export async function generateStanding() {
    for (const id in COMPETITION_ID) {
        const standingResult: Standings[] = await getStanding(
            COMPETITION_ID[id]
        )
        await utils.firebaseSaveAll(id + "/rss_standing", standingResult, true)
    }
}