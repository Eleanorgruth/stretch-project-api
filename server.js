const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('./knex')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.set('port', 8080)

//Get all comics in collection
app.get('/api/v1/comicData', async (request, response) => {
  const comicData = await knex.select().from('comicData')
  response.status(200).json(comicData)
})

//Get single comic in collection
app.get('/api/v1/comicData/:id', async (request, response) => {
  try {
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
app.post('/api/v1/comicData', async (request, response) => {
  for (let requiredParameter of ['id', 'title', 'year', 'issue', 'grade', 'image_path', 'verified', 'note']) {
    if (!request.body[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: {id: <Number> , title: <String>, year: <String>, issue: <String>, grade: <String>, image_path: <String>, verified: <String>, note: <String>}. You're missing a "${requiredParameter}" property.` });
    }
  }
  try {
    const comic = await knex('comicData').insert(request.body, ['id', 'title', 'year', 'issue', 'grade', 'image_path', 'verified', 'note'])
    response.status(201).json(comic[0])
  } catch (error) {
    response.status(500).json(error)
  }
})

//Update single comic in collection
app.put('/api/v1/comicData/:id', async (request, response) => {
  try {
    const comic = await knex('comicData').where('id', Number(request.params.id)).update(request.body, ['id', 'title', 'year', 'issue', 'grade', 'image_path', 'verified', 'note'])
    response.status(200).json(comic[0])
  } catch (error) {
    response.status(500).json(error)
  }
})

//Delete single comic from collection
app.delete('/api/v1/comicData/:id', async (request, response) => {
  try {
    await knex('comicData').where('id', Number(request.params.id)).del()
    response.status(200).json({ response: `Comic with id:${request.params.id} was deleted` })
  } catch (error) {
    response.status(500).json(error)
  }
})

app.listen(8080, () => {
  console.log("Server has started on port 8080")
})