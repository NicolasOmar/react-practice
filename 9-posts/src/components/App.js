import React, { useState } from 'react'
import ResoruceList from './ResourceList'

const App = () => {
  /*
    THE FIRST IMPORTANT PART OF HOOKS IS THAT EVERY PROPERTY HAS
      ITS NAME TO BE CALLED
      A METHOD NAME TO CALL WHEN YOU WANT YO CHANGE ITS STATE/VALUE
      AN INITAL VALUE (COULD BE NONE)
  */
  const [resource, setResource] = useState('posts')

  // INSTEAD USING THIS.SETSTATE... YOU JUST HAVE TO CALL THE SET METHOD TO CHANGE ITS VALUE
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