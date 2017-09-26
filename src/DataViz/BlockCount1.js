import React from 'react'
import './BlockCount1.css'

const Block = ({array}) => {
  const makeChart = (array) => {
    return (array.map(function(person, i){
        return <div className={"blockcount1 color_" + array[i]} data-index={i} key={"person_" + i}></div>
    }))
  };

  var blockPeople = makeChart(array);
  return (
    <div>
      <div className="reponsive-ratio">
        <div className="block-count-chart1">
          {blockPeople}
        </div>
      </div>
    </div>

  )
}

export default Block
