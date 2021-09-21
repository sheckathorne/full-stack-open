const mongoose = require('mongoose')


const getUrl = (password) => `mongodb+srv://fullstack:${password}@cluster0.ltofs.mongodb.net/phonebook?retryWrites=true&w=majority`

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

if (process.argv.length >= 3) {
	mongoose.connect(getUrl(process.argv[2]))

	const personSchema = new mongoose.Schema({
	  name: String,
	  number: String,},{collection: 'persons'})
		
	const Person = mongoose.model('Person', personSchema)

	if ( process.argv.length === 3) {
		console.log('Phonebook:')
		Person
	  		.find({})
	  		.then(persons => {
		  		persons.map(person => console.log(`${person.name} ${person.number}`))
		    mongoose.connection.close()
	  	})
	} else {
		const person = new Person({
		  name: `${process.argv[3]}`,
		  number: `${process.argv[4]}`,
		})

		person.save().then(result => {
		  console.log('person saved!')
		  mongoose.connection.close()	
		})
	}
}