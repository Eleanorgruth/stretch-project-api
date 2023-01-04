const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('./knex')

app.set('port', 8080)

app.use(cors())

//Get all comics in collection
app.get('/api/v1/comicData', async(request, response) => {
  const comicData= await knex.select().from('comicData')
  response.status(200).json(comicData)
})

//Get single comic in collection
app.get('/api/v1/comicData/:id', async (request, response) => {

  try{
    const { id } = request.params
    const comic = await knex.where('id', id).select().from('comicData')
  
    if (comic.length) {
      response.status(200).json(comic)
      
    } else {
      response.status(404).send(`Comic not found matching the id ${id}`)
    }
  } catch (err) {
    response.status(500).send(err.message)
  }
})

//Add new comic to collection

//Update single comic in collection

//Delete single comic from collection

app.listen(8080, () => {
  console.log("Server has started on port 8080")
})