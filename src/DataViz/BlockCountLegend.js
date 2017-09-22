import React from 'react'
import "./BlockCount.css"
import './Legend.css'

const BlockCountLegend = ({legendArray, selected}) => {
  return (
    <div className="legend">
      <div className="legendgroup">
        <div className="legendblock outline"></div><span className="legend-text">= 100 students</span>
      </div>
    </div>
  )
}

export default BlockCountLegend
