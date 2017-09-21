import React from 'react'
import './ChartTitle.css'


export const GradeHeader = ({children}) => {
  return (
    <h2 className="grade-header">{children}</h2>
  )
}

export const ChartTitle = ({children}) => {
  return (
    <h3 className="chart-title"><span>{children}</span></h3>
  )
}

export const ChartSubTitle = ({children}) => {
  return (
    <h4>{children}</h4>
  )
}
