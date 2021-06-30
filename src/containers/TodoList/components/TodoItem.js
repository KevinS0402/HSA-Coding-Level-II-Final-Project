import React from 'react'

const TodoItem = ({ idx, item }) => (
  {
    const finishItem = () => {
      console.log(`Finished ${item}`)
    } 
  }
  return (
    <button onClick = {finishItem}>Done!</button>
  )
  <ul>
    <li>
      {item}
    </li>
  </ul>
)

export default TodoItem