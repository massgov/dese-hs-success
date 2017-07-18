import React from 'react'
import axios from 'axios'
import BlockChart from './DataViz/BlockChart'
import { Button } from 'react-bootstrap'
import {ResponsiveContainer,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text} from 'recharts'

class Data extends React.Component{

      constructor(props, context) {
        super(props, context);

        this.state = {
          blockData: [],
          barData: [],
          barGroup: "all"
        };
      };

      componentWillMount = () =>  {
              this.fetchData()
          };

      fetchData = () =>  {
              var _this = this;
              axios.all([
                      axios.get('/data' + this.props.match.url +'/data.json'),
                  ])
                  .then(axios.spread(function(result) {
                    var data = eval(result.data)
                      _this.setState({
                          blockData: data[0],
                          barData: data[1],
                      });
                  }))
                  .catch((error) => {console.log(error)})

          };

          componentWillUnmount = () => {
              this.ignoreLastFetch = true
          };

          handleClick = (event) =>{
            var value = event.target.value;
            this.setState({
              barGroup: value
            })
          };

          createBarDescriptions = () => {
            const {barData, barGroup} = this.state;
            console.log(barGroup)
            return (barData.map(function(course_count, i){
                return <li key={"course-count_" + i}><b>{i+1} Only:</b> Of the {barData[i][`count_`+barGroup]} students who failed only one course, {barData[i][barGroup]} graduated on time.</li>
            }))
          }

          render = () =>  {
              const {blockData, barData, barGroup} = this.state;
              console.log(barData)
              var list  = this.createBarDescriptions();
              return (
                <div>
                  <div className="col-md-6 center">
                    <h3>On-Time Graduation Rate by Number of Courses Failed</h3>
                    <BlockChart data={blockData}/>
                  </div>
                  <div className="col-md-6">
                    <div className='center'>
                        <h3>On-Time Graduation Rate by Number of Core Courses Failed</h3>
                        <h4>The gap in on-time graduation widens based on the number and type of courses failed in the 9th grade</h4>
                        <Button onClick={this.handleClick} className={`btn btn-primary`} value="all">All</Button>
                        <Button onClick={this.handleClick} className={`btn btn-primary`} value="core">Core</Button>
                         <ResponsiveContainer minHeight={400}>
                           <BarChart data={barData} margin={{top: 20, right: 20, left: 10, bottom: 5}}>
                                <XAxis dataKey="label" fontSize = "1em"/>
                                <YAxis domain={[0,1]} fontSize = "1em"/>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <Tooltip/>
                                <Legend />
                                <Bar dataKey={barGroup} fill="#43956f"/>
                           </BarChart>
                         </ResponsiveContainer>
                     </div>
                     <ul>
                       {list}
                     </ul>
                   </div>
                </div>

              );
          };

}

export default Data
