require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('7xh1d') 
})

app.get('/login', (req,res) => {
    res.send('<h1>Please login yourself</h1>')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>Z0LTAR</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})