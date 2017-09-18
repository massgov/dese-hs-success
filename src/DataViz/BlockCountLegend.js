import React from 'react'
import "./BlockCount.css"

const BlockCountLegend = ({legendArray, selected}) => {
  var legendDescription
  switch (eval(selected)) {
    case 0:
      legendDescription = ["Pass Algebra II or higher math", "Did not pass Algebra II or higher math"]
      break;
    case 1:
      legendDescription = ["Pass Algebra II or higher math and enrolled in college",
        "Pass Algebra II or higher math and did not enroll in college",
        "Did not pass Algebra II or higher math and enrolled in college",
        "Did not pass Algebra II or higher math and did not enroll in college"]
      break;
    case 2:
      legendDescription = ["Pass Algebra II or higher math and stayed in college",
        "Pass Algebra II or higher math and did not stay in college",
        "Did not pass Algebra II or higher math and stayed in college",
        "Did not pass Algebra II or higher math and did not stay in college"]
      break;
    default: console.log('legend has no match')
  }
  const legend = legendArray.map(function(person, i){
          return (
            <div className="legendgroup" key={"legendblock_" + i} data-index={i}>
              <div className={"legendblock color_" + legendArray[i]}></div>
              <span>= {legendDescription[i]}</span>
            </div>
          )
          })
  return (
    <div className="legend">
      <div className="legendgroup">
        <div className="legendblock outline"></div><span>= 100 students</span>
      </div>
      {legend}
    </div>
  )
}

export default BlockCountLegend
