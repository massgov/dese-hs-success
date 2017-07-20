import React from 'react'
import {ChartTitle, ChartSubTitle} from './ChartTitle'

const BlockTitle= ({count, indicator, metric, clickedButton, i}) => {
  return (
    <div>
    <ChartTitle>{metric[i]+ ' '+indicator[clickedButton]}</ChartTitle>
    <ChartSubTitle>Total number of students: {count[i]} </ChartSubTitle>
    </div>
  )
}

export default BlockTitle
