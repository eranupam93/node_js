import http from 'http'

const server = http.createServer((req, res) => {
    res.end("you have requested for something")
})

const port = 2000

server.listen(port, () => console.log(`serveris running in port ${port}`))