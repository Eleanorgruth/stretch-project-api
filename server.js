const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('./knex')

app.set('port', 8080)

app.use(cors())

app.get('/api/v1/comicData', async(request, response) => {
  const comicData= await knex.select().from('comicData')
  response.status(200).json(comicData)
})

app.listen(8080, () => {
  console.log("Server has started on port 8080")
})