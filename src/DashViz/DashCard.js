import React from 'react'
import Description from '../Description'
import LineChart from './LineChart'
import './DashCard.css'

const DataCard =({Title, data, dataKey, dataCount}) => {
      var year, index, value, sentence, studentGroup, cardKey;
    	if(data){
	      for(let i = data.length-1; i > -1; i--) {
	        if(data[i][dataKey] != 'Null') {
	          year = data[i]['Yr'];
	          value = data[i][dataKey];
	          index = i;
	          break;
	        }
      	  }
      	}
        let ymin = 0, ymax = 100;
      	switch (dataKey) {
    	  case '4 Year Graduation Percent':
      		studentGroup = ' 2016 high school graduates';
      		cardKey = 'graduated in 4 years';
          break;
    	  case '5 Year Graduation Percent':
      		studentGroup = 'the 2015 highschool graduates';
      		cardKey = 'graduated in 5 years';
          break;
    	  case 'Chronic Absence Percent':
      		studentGroup = 'high school students';
      		cardKey = 'missed more than 10% of days';
          break;
    	  case 'Out of School Suspension Percent':
      		studentGroup = 'high school students';
      		cardKey = 'had at least one out-of-school suspension';
      		ymin = 0;
      		ymax = 20;
          break;
    	  case 'Passed All 9th Grade Courses Percent':
      		studentGroup = '9th graders';
      		cardKey = 'passed all 9th grade courses';
          break;
      	case 'Enrolled in AP/IB Course Percent':
      		studentGroup = 'juniors/seniors';
      		cardKey = 'took at least one AP/IB courses';
          break;
      	case 'College Enrollment Percent':
      		studentGroup = 'high school students';
      		cardKey = 'enrolled in college';
          break;
    	  case 'College Persistence Percent':
      		studentGroup = 'high school students who enrolled in college in 2014';
      		cardKey = 'stayed in college';
          break;
        default: console.log('data card has not matched')
    	}
    return(
      <div className="col-md-6">
          <div className="dash-card">
            <p><span className="dash-card__hightlight">{Math.round( value * 10 ) / 10}%</span> of {studentGroup} <span className="dash-card__hightlight">{cardKey}</span> in {year}.</p>
            <LineChart data={data} dataKey={dataKey} dataCount={dataCount} ymin={ymin} ymax={ymax}/>
          </div>
      </div>
    )
}

export default DataCard
