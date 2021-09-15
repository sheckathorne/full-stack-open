import React from 'react'

const Total = ({ parts }) => {
  const total = parts.map(part => part.exercises).reduce((a, b) => a + b)

  return (
  	<div><b>total of {total} exercises</b></div>
  )
}

export default Total