import React from 'react'
import './Legend.css'

const PersonIcon = () => {
  return (
      <img src="/images/person_alt.svg" width="auto" height="18px" alt="a person icon"/>
  )
}

const DefaultIcon = () => {
  return (
    <div className="legend-icon" alt="a block icon"></div>
  )
}

const BlockLegend = ({type, children}) => {
    var LegendIcon = (type == 'person')? <PersonIcon/>: <DefaultIcon/>
    return (
      <div className="legend">
        <hr/>
        { LegendIcon }<span className="legend-text"> ={children}</span>
      </div>
    )
}

export default BlockLegend
