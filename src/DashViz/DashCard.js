import React from 'react'
import Description from '../Description'
import LineChart from './LineChart'
import './DashCard.css'

let ymin = 0;
let ymax = 100; 

const DataCard =({Title, data, dataKey}) => {
    if(dataKey){
    	if ( dataKey === '4 Year Graduation Percent' ){
    		ymin = 0;
    		ymax = 100;
    	} else if ( dataKey === '5 Year Graduation Percent' ){
    		ymin = 4;
    		ymax = 100;
    	} else if ( dataKey === 'Mass Core Completion Percent' ){
    		ymin = 0;
    		ymax = 100;
    	} else if ( dataKey === 'Chronic Absence Percent' ){
    		ymin = 0;
    		ymax = 100;
    	} else if ( dataKey === 'Out of School Suspension Percent' ){
    		ymin = 0;
    		ymax = 12;
    	} else if ( dataKey === 'Passed All 9th Grade Courses Percent' ){
    		ymin = 0;
    		ymax = 100;
    	} else if ( dataKey === 'Enrolled in AP/IB Course Percent' ){
    		ymin = 0;
    		ymax = 100;
    	} else if ( dataKey === 'College Enrollment Percent' ){
    		ymin = 0;
    		ymax = 97;
    	} else if ( dataKey === 'College Persistence Percent' ){
    		ymin = 0;
    		ymax = 94;
    	}
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
