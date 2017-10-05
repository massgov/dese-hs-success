import React from 'react'
import './Block.css'

const Block = ({array}) => {
  const makeChart = (array) => {
    return (array.map(function(person, i){
        return (
        <svg className={"block colorPerson_" + array[i]} data-index={i} key={"person_" + i} viewBox="0 0 15 27">
          <path d="M4.4,3.5c0-1.8,1.4-3.4,3.4-3.5c1.9,0,3.5,1.5,3.5,3.5S9.8,6.9,7.8,6.9C5.9,6.9,4.4,5.4,4.4,3.5z"/>
          <path d="M11.5,7.7H9.2c-0.8,0-1.7,0-2.5,0H4.2c-1.4,0-2.6,1.2-2.6,2.6v4.8c0,1.3,0.9,2.3,2.1,2.6C3.8,17.8,3.9,17.9,4,18
          	c0.2,0.2,0.4,0.4,0.5,0.7c0.1,0.6,0.2,1.2,0.4,1.8c0.1,1,0.4,2.2,0.6,3.5c0.1,0.5,0.6,0.9,1.2,1c0.1,0,0.2,0,0.4,0c0.5,0,1,0,1.4,0
          	c0.8,0,1.4-0.4,1.5-1.1c0.2-1.2,0.5-2.5,0.7-3.8c0.1-0.6,0.4-1.2,0.5-1.8c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.1,0.2-0.2
          	c1.4-0.1,2.5-1.2,2.5-2.6v-4.8C14.1,8.9,13,7.7,11.5,7.7z"/>
        </svg>
      )
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
