import React from 'react'

const BarChartText= ({barData}) => {
  var list  = barData.map(function(course_count, i){
      return <li key={"course-count_" + i}><b>{i+1} Only:</b> Of the {barData[i][`count_all`]} students who failed only one course, {barData[i][`all`]} graduated on time. Of the {barData[i][`count_core`]} students who failed only one core course, {barData[i][`core`]} graduated on time.</li>
  })
  return (
    <ul>
      {list}
    </ul>
  )
}

export default BarChartText
