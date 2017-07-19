import React from 'react'

const PersonLegend = ({children}) => {
  return (
    <div id="legend">
      <img src="/images/person.svg" width="25px" height="25px" alt="a person icon"/><span>= {children}</span>
    </div>
  )
}

export default PersonLegend
