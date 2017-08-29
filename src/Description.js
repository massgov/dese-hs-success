import React from 'react'
import './Description.css'

const Description = ({children}) => {
  return (
    <div className="description">
      <p>{children}</p>
    </div>
  )
}

export default Description
