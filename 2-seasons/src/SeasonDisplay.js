import React from 'react'
// IMPORT COMPONENT STYLES
import './SeasonDisplay.css'

const seasonConfig = {
  summer: {
    text: 'Let´s go to the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'It is chilly outside',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => 
  month > 2 && month < 9 ?
    lat > 0 ? 'summer' : 'winter' :
    lat > 0 ? 'winter' : 'summer'

class SeasonDisplay extends React.Component {
  render() {
    const season = getSeason(this.props.latitude, new Date().getMonth())
    const { text, iconName } = seasonConfig[season]

    return (
      <h1 className={`season-display ${season}`}>
        <i className={`icon-left massive icon ${iconName}`} />
        {text}
        <i className={`icon-right massive icon ${iconName}`} />
      </h1>
    )
  }
}

export default SeasonDisplay