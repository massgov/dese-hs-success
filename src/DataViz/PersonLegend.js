import React from 'react'

const PersonLegend = ({children}) => {
  return (
    <div className="legend">
      <hr/>
      <img src="/images/person_alt.svg" width="25px" height="25px" alt="a person icon"/><span>={children}</span>
    </div>
  )
}

export default PersonLegend
