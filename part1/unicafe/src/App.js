import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (name) => () => {
    switch(name) {
      case 'good':
        setGood(good + 1)
        break;
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      case 'bad':
        setBad(bad + 1)
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <Header handleClick={handleClick} />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Header = ({ handleClick }) => {
  return(
    <div>
      <h2>Give feedback</h2><br/>
      <Button name='Good' onClick={handleClick('good')} />
      <Button name='Neutral' onClick={handleClick('neutral')} />
      <Button name='Bad' onClick={handleClick('bad')} />
    </div>

  )
}

const Statistics = ({ good, neutral, bad} ) => {
  const all = good + neutral + bad
  const average = (good.toFixed(2) - bad).toFixed(2)/all.toFixed(2)
  const positive = ((good/all) * 100).toString() + '%'

  if (all === 0 ) {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return(
      <div>
        <table>
          <StatisticsLine name='good' value={good} />
          <StatisticsLine name='neutral' value={neutral} />
          <StatisticsLine name='bad' value={bad} />
          <StatisticsLine name='all' value={all} />
          <StatisticsLine name='average' value={average} />
          <StatisticsLine name='positive' value={positive} />
        </table>
      </div>
    )
  }
}

const Button = ({name, onClick}) => <button onClick={onClick}>{name}</button>

const StatisticsLine = ({ name, value }) => <tr><td>{name}</td><td>{value}</td></tr>

export default App;