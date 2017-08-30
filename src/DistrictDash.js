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
      data: {}
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

                // const parsed = Baby.parse(result.data, {
                //   header: true,
                // });
                // const value = eval(parsed)
                const data = _.mapKeys(result.data, "district")
                  _this.setState({data})
              }))
              .catch((error) => {console.log(error)})

      };

          render = () =>  {
            const {data} = this.state
            if(data.length==0) {
              return <div>Loading...</div>
            }

            const districts = _.keysIn(data)
            var options = [];
            for (var i=0; i<districts.length; i++){
              var option = { value: districts[i], label: districts[i] }
              options.push(option)
            }

            function handleChange(val) {
              const selected = val.value
              console.log(data)

            }
                          return (
                <div className="container data-dash">
                  <DashSelect
                      options={options}
                      handleChange={handleChange}
                    />
                  <div className="dashboard">
                      <div className="row">
                          <DashCard Title='4-yr & 5-yr cohort graduation rate'/>
                          <DashCard Title='Chronically absent rate'/>
                          <DashCard Title='Out-of-school suspension rate'/>
                       </div>
                       <div className="row">
                           <DashCard Title='MassCore Completion Rate'/>
                           <DashCard Title='Jr. or Sr. taking AP/IB courses rate'/>
                           <DashCard Title='College Enrollment & Persistent Rate'/>
                       </div>
                   </div>
                </div>

              );
          };

}

export default DistrictDash
