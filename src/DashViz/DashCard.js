import React from 'react'
import LineChart from './LineChart'
import './DashCard.css'
import FootNoteLink from '../FootNoteLink'

const DataCard =({Title, data, dataKey, dataCount}) => {
      var year, value, studentGroup, cardKey;
    	if(data){
	      for(let i = data.length-1; i > -1; i--) {
	        if(data[i][dataKey] !== 'Null') {
	          year = data[i]['Yr'];
	          value = data[i][dataKey];
	          break;
	        }
      	  }
      	}
        let ymin = 0, ymax = 100;
      	if (value) {
        var percValue = Math.round( value * 10 ) / 10
        switch (dataKey) {
    	   case '4 Year Graduation Percent':
      		studentGroup = ' students who started high school in';
      		cardKey = 'graduated in 4 years';
          return (
            <div className="col-md-6">
              <div className="dash-card">
                <p><span className="dash-card__hightlight">{percValue}%</span> of {studentGroup} {year-4}-{year-2003} <span className="dash-card__hightlight">{cardKey}</span>.</p>
                <LineChart data={data} dataKey={dataKey} dataCount={dataCount} ymin={ymin} ymax={ymax}/>
              </div>
            </div> )
          break;
    	   case '5 Year Graduation Percent':
      		studentGroup = ' students who started high school in';
      		cardKey = 'graduated in 5 years or less';
          return (
            <div className="col-md-6">
              <div className="dash-card">
                <p><span className="dash-card__hightlight">{percValue}%</span> of {studentGroup} {year-4}-{year-2003} <span className="dash-card__hightlight">{cardKey}</span>.</p>
                <LineChart data={data} dataKey={dataKey} dataCount={dataCount} ymin={ymin} ymax={ymax}/>
              </div>
            </div> )
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
          return (
            <div className="col-md-6">
              <div className="dash-card">
                <p><span className="dash-card__hightlight">{percValue}%</span> of {studentGroup} <span className="dash-card__hightlight">{cardKey}</span> in {year-1}-{year-2000}.<FootNoteLink index={6}/></p>
                <LineChart data={data} dataKey={dataKey} dataCount={dataCount} ymin={ymin} ymax={ymax}/>
              </div>
            </div> )
          break;
    	   case 'Passed All 9th Grade Courses Percent':
      		studentGroup = '9th graders';
      		cardKey = 'passed all 9th grade courses';
          break;
      	 case 'Enrolled in AP/IB Course Percent':
      		studentGroup = 'juniors/seniors';
      		cardKey = 'took at least one AP/IB course';
          break;
      	 case 'College Enrollment Percent':
      		studentGroup = ' 2015 high school graduates ';
      		cardKey = 'enrolled in college';
          return (
            <div className="col-md-6">
              <div className="dash-card">
                <p><span className="dash-card__hightlight">{percValue}%</span> of {studentGroup} <span className="dash-card__hightlight">{cardKey}</span> in the fall of {year}.</p>
                <LineChart data={data} dataKey={dataKey} dataCount={dataCount} ymin={ymin} ymax={ymax}/>
              </div>
            </div> )
          break;
    	   case 'College Persistence Percent':
      		studentGroup = 'high school graduates enrolled in and ';
      		cardKey = 'stayed in college';
          return (
            <div className="col-md-6">
              <div className="dash-card">
                <p><span className="dash-card__hightlight">{percValue}%</span> of {year} {studentGroup} <span className="dash-card__hightlight">{cardKey}</span> through the fall of {year+1}.</p>
                <LineChart data={data} dataKey={dataKey} dataCount={dataCount} ymin={ymin} ymax={ymax}/>
              </div>
            </div> )
          break;
        default: console.log('data card has not matched')
    	}
      return(
        <div className="col-md-6">
          <div className="dash-card">
            <p><span className="dash-card__hightlight">{percValue}%</span> of {studentGroup} <span className="dash-card__hightlight">{cardKey}</span> in {year-1}-{year-2000}.</p>
            <LineChart data={data} dataKey={dataKey} dataCount={dataCount} ymin={ymin} ymax={ymax}/>
          </div>
      </div>
      )
    }else{
      var dataKeynew = dataKey.split(' ')
      dataKeynew.pop()
      dataKeynew = dataKeynew.join(' ') 
     return (
             <div className="col-md-6">
               <div className="dash-card">
                 <p>Data on {dataKeynew} is not available for this school district.</p>
                 <LineChart data={data} dataKey={dataKey} dataCount={dataCount} ymin={ymin} ymax={ymax}/>
               </div>
             </div> )
    }
}

export default DataCard
