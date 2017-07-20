import React from 'react'

const BlockTitle= ({count, indicator, metric, clickedButton, i}) => {
  return (
    <div>
    <h3>{metric[i]+ ' '+indicator[clickedButton]}</h3>
    <h4>Total number of students: {count[i]} </h4>
    </div>
  )
}

export default BlockTitle
