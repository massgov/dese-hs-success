import React from 'react'

const Block = ({array}) => {
  const makeChart = (array) => {
    return (array.map(function(person, i){
        return <div className={"block color_" + array[i]} data-index={i} key={"person_" + i}></div>
    }))
  };
  var blockPeople = makeChart(array);
  return (
    <div>
      <hr />
      <div className="block-chart">
        {blockPeople}
      </div>
    </div>
  )
}

export default Block
