import React from 'react'
import useResources from '../helpers/useResources'

const ResoruceList = ({ resource }) => {
  // TO DEMOSTRATE A BETTER APPROACH TO ISOLATE HOOK LOGIC, I SEPARATED IT IN A FILE AND CALLED THE RESULTING METHOD
  const resources = useResources(resource)

  // EVERY TIME THE PROP 'resource' CHANGES IN THE FATHER COMPONENT, THE 'useResoruces' METHOD WILL USE THE SET METHOD INSIDE IT TO MAKE THE ENDPOINT CALL AND UPDATE THE CONST 'resources
  return (
    <div>
      <h2>{`${resource} list`}</h2>
      <div>
        {
          resources.length > 0 ?
          <ul>
            {resources.map(
              item => <li key={item.id}>{item.title}</li>
            )}
          </ul> : null
        }
      </div>
    </div>
  )
}

export default ResoruceList