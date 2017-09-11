import React from 'react'
import './Block.css'

const Block = ({array}) => {
  const makeChart = (array) => {
    return (array.map(function(person, i){
        return <div className={"block color_" + array[i]} data-index={i} key={"person_" + i}></div>
    }))
  };
  var blockPeople = makeChart(array);
  return (
    <div>
      <div className="block-chart">
        {blockPeople}
      </div>
    </div>
  )
}

export default Block
