import { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = resource => {
  const [resources, setList] = useState([])

  // I HAD TO MAKE A FUNCITON OUTSIDE THE USEEFFECT HOOK BECAUSE IT DOES NOT ACCEPT ASYNC FUNCTIONS
  const fetchResource = async resource => {
    const { data } = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`)
    setList(data)
  }

  /*
    USEEFFECT IS THE HOOK USED TO REACT TO ANY CHANGE ON THE PROP OR PROPS MENTIONED ON THE
    SECOND ARGUMENT (LOCATED BETWEEN THE ARRAY)
    IN CASE THAT ARRAY IS SETTED EMPTY, THE HOOK WILL BE EXECUTED THE FIRST TIME THE COMPONENT
    GETS RENDERED
  */
  useEffect(() => {
    fetchResource(resource)
  }, [resource])

  return resources
}

export default useResources