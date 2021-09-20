const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.ltofs.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  name: String,
  number: String,
},{collection: 'persons'})

const Person = mongoose.model('Person', noteSchema)

const person = new Person({
  name: 'Sean Heckathorne',
  number: '315-857-3123',
})

person.save().then(result => {
  console.log('person saved!')
  mongoose.connection.close()
})