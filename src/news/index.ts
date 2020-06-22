import * as _ from 'lodash'

import * as T from '../types'
import * as utils from '../utils'
import { News } from '../entities/news'
import { getNewsJSON, getNewsRSS } from './services'

import { INTER_SOURCES } from './inter'
import { MILAN_SOURCES } from './milan'

export const NEWS_SOURCES: { [index: string]: T.SourceInterface[] } = {
    inter: INTER_SOURCES,
    milan: MILAN_SOURCES
}

export async function generateFeeds(sources: string) {
    const newsResult: News[] = new Array();
    const command = NEWS_SOURCES[sources].map((source) => {
        return source.type === 'rss' ? getNewsRSS(source) : getNewsJSON(source)
    })
    const values = await Promise.all(command)
    console.log(`Promise.all size : ${values.length}`)
    newsResult.push(..._.flatten(values))
    console.log(`newsResult size : ${newsResult.length}`)
    newsResult.sort(function (a, b) {
        const dateA = new Date(a._pubDate)
        const dateB = new Date(b._pubDate)
        return dateB.getTime() - dateA.getTime()
    })

    const resultMap = new Map()
    let languangeArray = []
    for (const sourceNewsResult of newsResult) {
        languangeArray = []
        if (typeof resultMap.get(sourceNewsResult._sourceLanguage) === 'undefined') {
            languangeArray.push(sourceNewsResult)
            resultMap.set(sourceNewsResult._sourceLanguage, languangeArray)
        } else {
            languangeArray = resultMap.get(sourceNewsResult._sourceLanguage)
            languangeArray.push(sourceNewsResult)
        }
        resultMap.set(sourceNewsResult._sourceLanguage, languangeArray)
    }
    for (const [k, v] of resultMap) {
        utils.firebaseSaveAll(sources + '/rss_news/' + k, v)
    }
    console.log('insert to firebase completed')
    return newsResult
}
