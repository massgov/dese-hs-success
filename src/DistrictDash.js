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
        const selected = val.value
        this.setState({selected})
      };
          render = () =>  {
            const {data, selected} = this.state

            const distData = data[`${selected}`]
            console.log(distData)
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
                    />
                  <div className="dashboard">
                      <div className="row">
                          <DashCard Title='4-yr & 5-yr cohort graduation rate' data={distData}/>
                          <DashCard Title='Chronically absent rate' data={distData}/>
                          <DashCard Title='Out-of-school suspension rate' data={distData}/>
                       </div>
                       <div className="row">
                           <DashCard Title='MassCore Completion Rate' data={distData}/>
                           <DashCard Title='Jr. or Sr. taking AP/IB courses rate' data={distData}/>
                           <DashCard Title='College Enrollment & Persistent Rate' data={distData}/>
                       </div>
                   </div>
                </div>

              );
          };

}

export default DistrictDash
