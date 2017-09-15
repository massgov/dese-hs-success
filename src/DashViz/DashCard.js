import React from 'react'
import Description from '../Description'
import LineChart from './LineChart'
import './DashCard.css'

let ymin = 0;
let ymax = 100; 
var year, index, value, sentence, sentenceP1, sentenceP2, boldKey, boldKey2;

const DataCard =({Title, data, dataKey, dataCount}) => {
    	if(data){ 
            console.log(data)
	      for(let i = data.length-1; i > -1; i--) {
	        if(data[i][dataKey] != 'Null') {
	          year = data[i]['Yr'];
	          value = data[i][dataKey];
	          index = i;
	          break;
	        } 
      	  }
      	}
      	if(dataKey){
    	if ( dataKey === '4 Year Graduation Percent' ){
    		sentenceP1 = ' of 2015 cohort ';
    		sentenceP2 = ' in ';
    		boldKey = 'graduated in 4 years';
    		ymin = 0;
    		ymax = 100;
    	} else if ( dataKey === '5 Year Graduation Percent' ){
    		sentenceP1 = ' of 2016 cohort ';
    		sentenceP2 = ' in ';
    		boldKey = 'graduated in 5 years';
    		ymin = 4;
    		ymax = 100;
    	} else if ( dataKey === 'Mass Core Completion Percent' ){
    		sentence = ' of 2016 cohort graduated in 5 years in  '
    		ymin = 0;
    		ymax = 100;
    	} else if ( dataKey === 'Chronic Absence Percent' ){
    		sentenceP1 = ' of high school students ';
    		sentenceP2 = ' in ';
    		boldKey = 'missed more than 10% of days';
    		ymin = 0;
    		ymax = 100;
    	} else if ( dataKey === 'Out of School Suspension Percent' ){
    		sentenceP1 = ' of high school students had ';
    		sentenceP2 = ' in ';
    		boldKey = 'at least one out-of-school suspension';
    		ymin = 0;
    		ymax = 12;
    	} else if ( dataKey === 'Passed All 9th Grade Courses Percent' ){
    		sentenceP1 = ' of your 9th graders ';
    		sentenceP2 = ' in ';
    		boldKey = 'passed all 9th grade courses';
    		ymin = 0;
    		ymax = 100;
    	} else if ( dataKey === 'Enrolled in AP/IB Course Percent' ){
    		sentenceP1 = ' of juniors seniors ';
    		sentenceP2 = ' in ';
    		boldKey = 'took at least one AP/IB courses';
    		ymin = 0;
    		ymax = 100;
    	} else if ( dataKey === 'College Enrollment Percent' ){
    		sentenceP1 = ' of high school students ';
    		sentenceP2 = ' in ';
    		boldKey = 'enrolled in college';
    		ymin = 0;
    		ymax = 97;
    	} else if ( dataKey === 'College Persistence Percent' ){
    		sentenceP1 = ' of high schools students who enrolled in college in 2014 ';
    		sentenceP2 = ' in ';
    		boldKey = 'stayed in college';
    		ymin = 0;
    		ymax = 94;
    	}
    }
    return(
      <div className="col-md-6">
          <div className="dash-card">
            <p><strong>{value}%</strong>{sentenceP1}<strong>{boldKey}</strong>{sentenceP2}{year}.</p>
            <hr />
            <LineChart data={data} dataKey={dataKey} dataCount={dataCount} ymin={ymin} ymax={ymax}/>
          </div>
      </div>
    )
}

export default DataCard
