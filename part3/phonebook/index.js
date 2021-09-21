require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

const generateId = () => Math.floor(Math.random() * (999999999 - 100000000) + 100000000)

app.use(cors())
app.use(express.static('build'))
morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.json())

app.get('/info', (request, response) => {
  response.send(`Phonebook has info for ${persons.length} people <br><br>${new Date()}`)
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if ( !body.name ) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  if ( body.name.length === 0 || !body.name.length ) {
    return response.status(400).json({ 
      error: 'no name provided' 
    })
  }
/*
  if ( persons.find(person => person.name.toLowerCase() === body.name.toLowerCase()) ) {
    return response.status(400).json({ 
      error: 'duplicate name provided' 
    })
  }
*/
  const person = new Person({
    name: body.name,
    number: body.number || false,
    id: generateId(),
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})