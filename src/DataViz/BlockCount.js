import React from 'react'
import './BlockCount.css'

const Block = ({array}) => {
  const makeChart = (array) => {
    return (array.map(function(person, i){
        return <div className={"blockcount color_" + array[i]} data-index={i} key={"person_" + i}></div>
    }))
  };

  var blockPeople = makeChart(array);
  return (
    <div>
      <div className="reponsive-ratio">
        <div className="block-count-chart">
          {blockPeople}
        </div>
      </div>
    </div>

  )
}

export default Block
