import * as express from 'express'
import { generateFeeds } from './news'
import { generateStanding,generateFixtures } from './football'

const app = express()

app.get('/inter', async (req, res) => {
    return res.send(await generateFeeds('inter'))
})

app.get('/milan', async (req, res) => {
    return res.send(await generateFeeds('milan'))
})

app.get('/fixtures', async (req, res) => {

    await generateStanding()
    console.log('standing successfully generated')
    await generateFixtures()
    console.log('fixture successfully generated')
    return res.send(200)
})

app.listen(3000, () => {
    console.log('server is listening at port 3000')
})