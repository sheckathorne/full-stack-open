import React, { useState, useEffect } from 'react'
import personService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newPerson, setNewPerson ] = useState({name: '', number: ''})
  const [ filter, setFilter ] = useState('')
  const [ notification, setNotification ] = useState({ type: '', message: null })

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleNameChange = (e) => {
    setNewPerson({ ...newPerson, name: e.target.value, id: Math.max(...persons.map(o => o.id)) + 1 })
  }

  const handleNumberChange = (e) => {
    setNewPerson({ ...newPerson, number: e.target.value, id: Math.max(...persons.map(o => o.id)) + 1 })
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    /*
    if ( persons.find(person => person.name.toLowerCase() === newPerson.name.toLowerCase()) ) {
      if ( window.confirm(`${newPerson.name} has already been added to the phonebook, replace the old number with a new one`) ) {
        const id = persons.find(person => person.name.toLowerCase() === newPerson.name.toLowerCase()).id
        personService
          .update(id, newPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
          })
      }
      setNewPerson({name: '', number: ''})

    } else {*/
    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewPerson({name: '', number: ''})
      })
      .catch(error => {
        const errorString = error.response.data.substring(error.response.data.indexOf('ValidationError: ') + 17, error.response.data.indexOf(' Value: '))
        
        setNotification({ type: 'error', message: `${errorString}` })
        setTimeout(() => {
         setNotification({ type: '', message: null })
        }, 5000)
      })
    //}
  }

  const deletePerson = (id) => {
    const person = persons.find(person => person.id === id)
    if ( window.confirm(`Do you want to delete ${person.name} from the phonebook?`) ) {
      personService
        .remove(id)
        .then(removedPerson => {
          setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  const filteredPersons = ( filter.length > 0 ) ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) : persons

  return (
    <div>
      <Notification type={notification.type} message={notification.message} />
      <h2>Phonebook</h2>
      <Filter 
        filter={filter} 
        handleFilterChange={handleFilterChange} 
      />
      <h2>add a new</h2>
      <AddNewPerson 
        newPerson={newPerson} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange} 
        handleClick={handleClick}
      />
      <h2>Numbers</h2>
      <People 
        persons={filteredPersons}
        deletePerson={deletePerson}
      />
    </div>
  )
}

const Filter = ({ filter, handleFilterChange }) => <form><div>filter shown with: <input value={filter} onChange={handleFilterChange} /></div></form>

const AddNewPerson = ({ newPerson, handleNameChange, handleNumberChange, handleClick }) => {
  return (
    <>
    <form>
      <div>name: <input value={newPerson.name} onChange={handleNameChange} /></div>
      <div>number: <input value={newPerson.number} onChange={handleNumberChange} /></div>
      <div><button type="submit" onClick={handleClick}>add</button></div>
    </form>
    </>
  )
}

const People = ({ persons, deletePerson}) => {
  return (
    <>
    {
      persons.map(person => 
        <Number 
          key={person.id} 
          person={person}
          handleDelete={() => deletePerson(person.id)}
        />
      )
    }
    </>
  )
}

const Number = ({ person, handleDelete }) => <p>{person.name} {person.number} <button onClick={handleDelete}>delete</button></p> 

const Notification = ({ type, message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={type}>
      {message}
    </div>
  )
}

export default App