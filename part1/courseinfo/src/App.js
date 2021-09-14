import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <div>
      <h1>
        {course}
      </h1>
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part partName={parts[0].name} exercises={parts[0].exercises} />
      <Part partName={parts[1].name} exercises={parts[1].exercises} />
      <Part partName={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}

const Part = ({ partName, exercises }) => {
  return (
    <div>
      <p>
        Part Name: {partName} contains {exercises} exercises
      </p>
    </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.map(part => part.exercises).reduce((a, b) => a + b)

  return (
    <div>
      Total Exercises: {total}
    </div>
  )
}

export default App;