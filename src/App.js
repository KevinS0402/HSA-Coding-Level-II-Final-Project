import React from 'react'
import {TodoList} from './containers/TodoList'
import Home from './containers/Home'

const userName = "Kevin"
const element = <Home name = "Kevin"/>
const App = () => (
  <div className="App">
    {userName ? <Home name = {userName}/> : <Home name = "Stranger"/>}
    <TodoList />
  </div>
)

export default App
