import React from 'react'
import './DistrictDash.css'
import DashCard from './DashViz/DashCard'
import DashSelect from './DashViz/DashSelect'
import axios from 'axios'
// import Baby from 'babyparse'
import _ from 'lodash'

class DistrictDash extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      data: {},
      selected: 'State'
    }

  }
  componentWillMount = () =>  {
          this.fetchData()
      };

  fetchData = () =>  {
          var _this = this;
          axios.all([
                  axios.get('/data/district.json'),
              ])
              .then(axios.spread(function(result) {

              const data = _.groupBy(result.data, 'DistName')
                _this.setState({data})
              }))
              .catch((error) => {console.log(error)})

      };

      handleChange = (val) => {
        if(val==null) {
          this.setState({selected: 'State'})
        }else{
          const selected = val.value
          this.setState({selected})
        }
      };

      handleClick = (event) =>  {
        var selected = event.target.value;
        this.setState({selected})
      };


          render = () =>  {
            const {data, selected} = this.state

            const distData = data[`${selected}`]
            console.log(selected)
            if(data.length==0) {
              return <div>Loading...</div>
            }

            const districts = _.keysIn(data)
            var options = [];
            for (var i=1; i<districts.length; i++){
              var option = { value: districts[i], label: districts[i] }
              options.push(option)
            }


            return (
                <div className="container data-dash">
                    <DashSelect
                        options={options}
                        handleChange={this.handleChange}
                        handleClick={this.handleClick}
                        value={selected}
                      />
                    <div className="dashboard">
                      <div className="row">
                          <DashCard Title='4-yr Cohort Graduation Rate' data={distData} dataKey="4 Year Graduation Percent"/>
                          <DashCard Title='5-yr Cohort Graduation Rate' data={distData} dataKey="5 Year Graduation Percent"/>
                          <DashCard Title='MassCore Completion Rate' data={distData} dataKey="Mass Core Completion Percent"/>

                       </div>
                       <div className="row">
                         <DashCard Title='Chronically Absent Rate' data={distData} dataKey="Chronic Absence Percent"/>
                         <DashCard Title='Out-of-school Suspension Rate' data={distData} dataKey="Out of School Suspension Percent"/>
                          <DashCard Title='Passed All 9th-Grade Courses Rate' data={distData} dataKey="Passed All 9th Grade Courses Percent"/>

                       </div>
                       <div className="row">
                           <DashCard Title='Jr. or Sr. Taking AP/IB Courses Rate' data={distData} dataKey="Enrolled in AP/IB Course Percent"/>
                           <DashCard Title='College Enrollment Rate' data={distData} dataKey="College Enrollment Percent"/>
                           <DashCard Title='College Persistent Rate' data={distData} dataKey="College Persistence Percent"/>
                       </div>
                   </div>
                </div>

              );
          };

}

export default DistrictDash
