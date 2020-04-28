import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ResoruceList = props => {
  const [list, setList] = useState([])
  const [loader, setLoader] = useState(false)
  const { resource } = props

  const fetchResource = async resource => {
    setLoader(true)
    const { data } = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`)
    setList(data)
    setLoader(false)
  }

  useEffect(() => {
    fetchResource(resource)
  }, [resource])

    return (
      <div>
        {
          loader &&
          <div className="ui active dimmer">
            <div className="ui loader"></div>
          </div>
        }
        <h2>{`${resource} list`}</h2>
        <div>
          {
            list.length > 0 ?
            <ul>
              {list.map(
                item => <li key={item.id}>{item.title}</li>
              )}
            </ul> : null
          }
        </div>
      </div>
    )
}

export default ResoruceList