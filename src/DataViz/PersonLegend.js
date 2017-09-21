import React from 'react'
import './Legend.css'

const PersonLegend = ({children}) => {
  return (
    <div className="legend">
      <hr/>
      <img src="/images/person_alt.svg" width="auto" height="18px" alt="a person icon"/><span className="legend-text">={children}</span>
    </div>
  )
}

export default PersonLegend
