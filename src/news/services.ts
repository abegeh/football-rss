import * as _ from 'lodash'
import * as Parser from 'rss-parser'
import * as tswrap from 'tswrap'
import axios from 'axios'
import * as scrapeIt from 'scrape-it'

import * as T from '../types'
import { News } from '../entities/news'

export const rssParser = new Parser({
    customFields: {
        item: [
            ["author", "creator"],
            ["content:encoded", "contentEncoded"],
            ["media:content", "media"],
            ["enclosure", "media"]
        ]
    }
})

export async function getNewsRSS(sourceDetail: T.SourceInterface): Promise<News[]> {
    const newsResult: News[] = new Array()
    console.log(`fetching news from ${sourceDetail.link}`)

    const feedResult = await tswrap.wrapPromise<Parser.Output>(rssParser.parseURL(sourceDetail.link))
    if (tswrap.isError(feedResult)) {
        console.log(`error fetching news from ${sourceDetail.link} : ${feedResult.message}`)
        console.log(JSON.stringify(feedResult))
        return []
    }

    // const newsResult: News[] = feedResult.items ? feedResult.items.map(value => {
    //     return new News(
    //         sourceDetail.source,
    //         sourceDetail.source,
    //         value.title!,
    //         value.pubDate!,
    //         new Date(value.pubDate!).getTime(),
    //         value.link!,
    //         value.content!,
    //         sourceDetail.logo,
    //         sourceDetail.lang,
    //         value.media ? value.media.$.url : '',
    //         value.contentEncoded || ''
    //     )
    // }) : []
    for (const value of feedResult.items!) {
        let news = new News(
            sourceDetail.source,
            sourceDetail.source,
            value.title!,
            value.pubDate!,
            new Date(value.pubDate!).getTime(),
            value.link!,
            value.content!,
            sourceDetail.logo,
            sourceDetail.lang
        )
        news._mediaUrl = value.media ? value.media.$.url : ''
        news._contentEncoded = value.contentEncoded || ''
        const axiosResult = await tswrap.wrapAxios<string>(axios.get(value.link!))

        if (tswrap.isAxiosError(axiosResult)) {
            news._mediaUrl = news._mediaUrl
        } else {
            const scrapeResult = scrapeIt.scrapeHTML<T.FeedDetail>(axiosResult.data, sourceDetail.parser)
            news._mediaUrl = value.media ? value.media.$.url : scrapeResult.mediaUrl
            // news.contentEncoded = scrapeResult.contentEncoded?.replace(/<script[^>]*>(.*?)<\/script*>/g, '')
            //     .replace(/<aside[^>]*>(.*?)<\/aside*>/g, '')
            //     .replace(/<source[^>]*>(.*?)<\/source*>/g, '')
            //     .replace(/<figure[^>]*>(.*?)<\/figure*>/g, '')
            //     .replace(/<h1[^>]*>(.*?)<\/h1*>/g, '')
            //     .replace(/<div[^>]*>|\n|\r|\t|<\/div>/g, '')
            //     .trim()
        }
        newsResult.push(news)
    }
    return newsResult
}
export async function getNewsJSON(sourceDetail: T.SourceInterface): Promise<News[]> {
    console.log(`fetching news from ${sourceDetail.link}`)

    const feedResult = await axios.get(sourceDetail.link)

    if (tswrap.isAxiosError(feedResult)) {
        console.log(`error fetching news from ${sourceDetail.link} : ${feedResult.message}`)
        console.log(JSON.stringify(feedResult))
        return []
    }

    const newsResult: News[] = feedResult.data.response ? feedResult.data.response.map((value: any) => {
        const payload = value.payload
        return new News(
            payload.source,
            payload.source,
            payload.title!,
            new Date(value.datetime! * 1000).toISOString(),
            value.datetime * 1000,
            payload.url!,
            payload.content!,
            sourceDetail.logo,
            sourceDetail.lang,
            payload.image,
            ''
        )
    }) : []

    // for (const value of feedResult.data.response!) {
    //     const payload = value.payload
    //     let news = new News(
    //         payload.source,
    //         payload.source,
    //         payload.title!,
    //         new Date(value.datetime! * 1000).toISOString(),
    //         value.datetime * 1000,
    //         payload.url!,
    //         payload.content!,
    //         sourceDetail.logo,
    //         sourceDetail.lang
    //     )
    //     news._mediaUrl = payload.image
    //     news._contentEncoded = ''
    //     newsResult.push(news)
    // }
    return newsResult
}