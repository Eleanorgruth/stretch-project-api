const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('./knex')
const { DatabaseError } = require('pg')
const PORT = process.env.PORT || 8080
app.set('port', PORT)

app.use(cors())

//TEST
app.get('/', (request, response) => {
  response.status(200).json({
    smoke: "test"
  })
 })
 
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

// //Add new comic to collection
// app.post('/api/v1/comicData', async (request, response) => {
//   console.log(request.body)
//   // const id = await database("comicData").insert(newComic, 'id')
//   // const comic = await knex.where('id', id).select().from('comicData')
//   // response.status(201).send(comic)

//   try {
//     const id = await knex.insert(request.body).into('comicData');
//     response.status(201).json({ id })
//   } catch (error) {
//     response.status(500).json({ error });
//   }
// })

//Update single comic in collection

//Delete single comic from collection

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`)
})