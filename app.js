const http = require('http')
const express = require('express')
const data = require('./data.json')

const app = express()
const PORT = 9091

const server = http.createServer(app)

server.listen(PORT)
server.on('error', console.error)
server.on('listening', () => {
  console.log('listening')
})

app.get('/', (req, res) => {
  res.status(200).json({ request: true })
})

app.get('/characters', (req, res) => {
  const id = req.params.id

  res.status(200).json(data.results)
})

app.get('/characters/:id', (req, res) => {
  const id = req.params.id

  res.status(200).json(data.results[parseInt(id) - 1])
})

app.get('/characters/films/2', (req, res) => {
})


