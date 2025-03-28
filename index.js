import express from 'express'
import path from 'path'

const app = express()
app.get('/', ((req, res) => {
    let dir = path.resolve()
    // const url = dir + '/index.html'
    const url = path.join(dir, '/index.html')
    console.log(dir + '/index.js')
    res.sendFile(url)

}))
const port = 2000
app.listen(port, () => console.log(`server is runnning in port ${port}`))