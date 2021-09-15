import React, { useState } from 'react'

const App = () => {
  const initialAnecdotes = [
    { text: 'If it hurts, do it more often', votes: 0},
    { text: 'Adding manpower to a late software project makes it later!', votes: 0 },
    { text: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0 },
    { text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0 },
    { text: 'Premature optimization is the root of all evil.', votes: 0 },
    { text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0 },
    { text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients', votes: 0 }
  ]

  const handleRandomClick = () => {
  	const randomId = Math.floor(Math.random() * (initialAnecdotes.length - 0) + 0)
  	setSelected(randomId)
  }
  
  const handleVoteClick = () => {
  	const newAnecdoteArray = [...anecdotes]
  	newAnecdoteArray.splice(selected, 1, { text: newAnecdoteArray[selected].text, votes: newAnecdoteArray[selected].votes + 1 })
  	setAnecdotes(newAnecdoteArray)
  }

  const [selected, setSelected] = useState(0)
  const [anecdotes, setAnecdotes] = useState(initialAnecdotes)

  const maxVotesAnedote = anecdotes.find(anecdote => anecdote.votes === Math.max.apply(Math, anecdotes.map(o => o.votes)))

  return (
  	<>
      <div>
        <h2>Anedote of the day</h2>
        <p>{anecdotes[selected].text}</p>
        <p>has {anecdotes[selected].votes} votes</p>
        <button onClick={handleRandomClick}>next anecdote</button>
        <button onClick={handleVoteClick}>vote</button>
      </div>
      <div>
    	<h2>Anecdote with most votes</h2>
    	<p>{maxVotesAnedote.text}</p>
    	<p>has {maxVotesAnedote.votes} votes</p>
      </div>
    </>
  )
}

export default App