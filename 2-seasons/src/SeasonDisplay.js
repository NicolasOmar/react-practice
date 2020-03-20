import React from 'react'

const getSeason = (lat, month) => 
  month > 2 && month < 9 ?
    lat > 0 ? 'summer' : 'winter' :
    lat < 0 ? 'winter' : 'summer'

class SeasonDisplay extends React.Component {
  render() {
    const season = getSeason(this.props.latitude, new Date().getMonth())

    return <div>Here is {season}</div>
  }
}

export default SeasonDisplay