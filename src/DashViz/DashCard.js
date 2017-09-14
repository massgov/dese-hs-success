import React from 'react'
import Description from '../Description'
import LineChart from './LineChart'
import './DashCard.css'

let ymin = 0
let ymax = 0
 //    if (dataKey == '4 Year Graduation Percent'){
 //      ymin = 0
 //      ymax = 100
 //    } else if (datakey == '5 Year Graduation Percent') {
 //      ymin = 4
 //      ymax = 100
 //    } else if (datakey == 'Mass Core Completion Percent') {
 //      ymin = 0
 //      ymax = 100
 //    } else if (datakey == 'Mass Core Completion Percent') {
 //      ymin = 0
 //      ymax = 100
 //    }

const DataCard =({Title, data, dataKey}) => {
    //console.log(dataKey);
    if(dataKey){
    	//console.log(data);
    }
    return(
      <div className="col-md-4">
          <div className="dash-card">
            <h4>{Title}</h4>
            <hr />
            <LineChart data={data} dataKey={dataKey} ymin={ymin} ymax={ymax}/>
          </div>
      </div>
    )
}

export default DataCard
