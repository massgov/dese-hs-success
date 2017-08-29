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
                          <DashCard />
                          <DashCard />
                          <DashCard />
                       </div>
                       <div className="row">
                           <DashCard />
                           <DashCard />
                           <DashCard />
                       </div>
                   </div>
                </div>

              );
          };

}

export default DistrictDash
