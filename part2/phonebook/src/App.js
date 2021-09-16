import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newPerson, setNewPerson ] = useState({name: '', number: ''})
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (e) => {
    setNewPerson({ ...newPerson, name: e.target.value, id: persons.lenth + 1 } )
  }

  const handleNumberChange = (e) => {
    setNewPerson({ ...newPerson, number: e.target.value, id: persons.length + 1 } )
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    
    if ( persons.find(person => person.name.toLowerCase() === newPerson.name.toLowerCase()) ) {
      alert(`${newPerson.name} has already been added to the phonebook`)
      setNewPerson({name: '', number: ''})
    } else {
      setPersons(persons.concat(newPerson))
      setNewPerson({name: '', number: ''})
    }
  }

  const filteredPersons = ( filter.length > 0 ) ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) : persons

  return (
    <div>
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
      <People persons={filteredPersons} />
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

const People = ({ persons }) => {
  return (
    <>
    {
      persons.map(person => <Number key={person.id} person={person} />)
    }
    </>
  )
}

const Number = ({ person }) => <p>{person.name} {person.number}</p>

export default App