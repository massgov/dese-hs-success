import React from 'react'
import './SectionTitle.css'

const SectionTitle = ({children}) => {
  return (
    <div className="section-divider-title"><span>{(children).toUpperCase()}</span></div>
  )
}

export default SectionTitle
