import React from 'react'
import './BlockCount.css'

const Block = ({array, children}) => {
  const makeChart = (array) => {
    return (array.map(function(person, i){
        return <div className={"blockcount color_" + array[i]} data-index={i} key={"person_" + i}></div>
    }))
  };

  var blockPeople = makeChart(array);
  return (
      <div className="block-group-item">
        <div className="block-count-chart">
          <h4>{children}</h4>
          {blockPeople}
        </div>
      </div>


  )
}

export default Block
