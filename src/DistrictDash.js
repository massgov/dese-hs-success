import React from 'react'
import './DistrictDash.css'
import DashCard from './DashViz/DashCard'
import DashSelect from './DashViz/DashSelect'

class DistrictDash extends React.Component{
          render = () =>  {
            var options = [
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' }
            ];

            function handleChange(val) {
              console.log("Selected: " + JSON.stringify(val));
            }
                          return (
                <div className="container data-dash">
                  <DashSelect
                      options={options}
                      onChange={handleChange}
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
