import React from 'react'
import TodoItem from './components/TodoItem'

const items = ["Do homework", "Eat dinner", "Code"]

export const TodoList = () => (
  <div>
    { items.length === 1 ? <p>1 item left</p> : <p>{items.length} items left.</p>}
    { items.map((item, idx) => <TodoItem key = {idx} item = {item} /> )}
  </div>
)