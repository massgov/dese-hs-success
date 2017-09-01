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
          render = () =>  {
            const {data, selected} = this.state

            const distData = data[`${selected}`]
            console.log(data)
            if(data.length==0) {
              return <div>Loading...</div>
            }

            const districts = _.keysIn(data)
            var options = [];
            for (var i=0; i<districts.length; i++){
              var option = { value: districts[i], label: districts[i] }
              options.push(option)
            }


            return (
                <div className="container data-dash">
                  <DashSelect
                      options={options}
                      handleChange={this.handleChange}
                      value={selected}
                    />
                  <div className="dashboard">
                      <div className="row">
                          <DashCard Title='4-yr Cohort Graduation Rate' data={distData} dataKey="Gradper_4yr"/>
                          <DashCard Title='5-yr Cohort Graduation Rate' data={distData} dataKey="Gradper_5yr"/>
                          <DashCard Title='MassCore Completion Rate' data={distData} dataKey="MCorePer"/>

                       </div>
                       <div className="row">
                         <DashCard Title='Chronically Absent Rate' data={distData} dataKey="ChronicAbsRate"/>
                         <DashCard Title='Out-of-school Suspension Rate' data={distData} dataKey="Out_Susp_Pct"/>
                          <DashCard Title='Passed All 9th-Grade Courses Rate' data={distData} dataKey="Pass_Per"/>

                       </div>
                       <div className="row">
                           <DashCard Title='Jr. or Sr. Taking AP/IB Courses Rate' data={distData} dataKey="APIBcourse_per"/>
                           <DashCard Title='College Enrollment Rate' data={distData} dataKey="PSEnrperc"/>
                           <DashCard Title='College Persistent Rate' data={distData} dataKey="PSPersAny2ndperc"/>
                       </div>
                   </div>
                </div>

              );
          };

}

export default DistrictDash
