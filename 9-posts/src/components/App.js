import React, { useState } from 'react'
import ResoruceList from './ResourceList'

const App = () => {
  const [resource, setResource] = useState('posts')

  return (
    <div className="ui container">
      <div>
        <button onClick={() => setResource('posts')} className="ui primary button ">Posts</button>
        <button onClick={() => setResource('todos')} className="ui primary button ">Todos</button>
      </div>

      <ResoruceList
        resource={resource}
      />
    </div>
  )
}

export default App