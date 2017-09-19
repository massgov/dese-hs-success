import React from 'react'
import './DistrictDash.css'
import DashCard from './DashViz/DashCard'
import DashSelect from './DashViz/DashSelect'
import axios from 'axios'
// import Baby from 'babyparse'
import _ from 'lodash'
import { StickyContainer, Sticky } from 'react-sticky';
import SectionTitle from './SectionTitle';

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
            //console.log(data)

            const distData = data[`${selected}`]
            //console.log(selected)
            if(data.length === 0) {
              return <div>Loading...</div>
            }

            var districts = _.keysIn(data)
            districts = districts.sort()
            var options = [];
            for (var i=0; i<districts.length; i++){
              var option = { value: districts[i], label: districts[i] }
              options.push(option)
            }
            options.splice(259,1)

            return (
              <StickyContainer key={2} className="container data-dash">
                  <Sticky>
                    {
                      (props) => {
                        var sticky
                        if (props.isSticky){
                          sticky = true
                        } else { sticky = false }
                        return (
                          <DashSelect
                              options={options}
                              handleChange={this.handleChange}
                              handleClick={this.handleClick}
                              value={selected}
                              sticky = {sticky}
                            />
                        )
                      }
                    }
                  </Sticky>
                  <div >
                      <div className="dashboard">
                        <div className="row">
                          <div className="col-md-12 center">
                            <SectionTitle>Cohort Graduation Rates</SectionTitle>
                          </div>
                            <DashCard Title='4-yr Cohort Graduation Rate' data={distData} dataKey="4 Year Graduation Percent" dataCount="4 Year Cohort Total"/>
                            <DashCard Title='5-yr Cohort Graduation Rate' data={distData} dataKey="5 Year Graduation Percent" dataCount="4 Year Cohort Total"/>
                         </div>

                         <div className="row">
                          <div className="col-md-12 center">
                            <SectionTitle>Attendance and Behavior</SectionTitle>
                          </div>
                           <DashCard Title='Chronically Absent Rate' data={distData} dataKey="Chronic Absence Percent" dataCount="Chronic Absence Count"/>
                           <DashCard Title='Out-of-school Suspension Rate' data={distData} dataKey="Out of School Suspension Percent" dataCount="Out of School Suspension Count"/>
                         </div>

                         <div className="row">
                          <div className="col-md-12 center">
                            <SectionTitle>Course Performance</SectionTitle>
                          </div>
                            <DashCard Title='Passed All 9th-Grade Courses Rate' data={distData} dataKey="Passed All 9th Grade Courses Percent" dataCount="Passed All 9th Grade Courses Count"/>
                            <DashCard Title='Jr. or Sr. Taking AP/IB Courses Rate' data={distData} dataKey="Enrolled in AP/IB Course Percent" dataCount="Enrolled in AP/IB Course Count"/>
                         </div>

                         <div className="row">
                          <div className="col-md-12 center">
                            <SectionTitle>College Enrollment and Persistence</SectionTitle>
                          </div>
                            <DashCard Title='College Enrollment Rate' data={distData} dataKey="College Enrollment Percent" dataCount="College Persistence Count"/>
                            <DashCard Title='College Persistent Rate' data={distData} dataKey="College Persistence Percent" dataCount="College Enrollment Count"/>
                         </div>

                     </div>
                  </div>
          </StickyContainer>
              );
          };

}

export default DistrictDash
