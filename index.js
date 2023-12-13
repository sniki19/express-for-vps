const express = require('express')
const path = require('path')
const fs = require('fs')

const server = express()
const port = 8080

server.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './home.html'))
})

server.listen(port, () => {
  console.log('server run!')
})