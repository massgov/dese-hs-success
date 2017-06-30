import React from 'react'
import axios from 'axios'
import BlockChart from './DataViz/BlockChart'
import { Button } from 'react-bootstrap'
import NVD3Chart from 'react-nvd3'
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
                    console.log(data[1].count)
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

          render = () =>  {
              const {blockData, barData, barGroup} = this.state;
              console.log(barData)
              return (
                <div>
                  <div className="col-md-6 center">
                    <h3>On time graducation rate based on classes failed by counts</h3>
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
                       <li><b>One Only:</b> Of the {barData.count} students who failed only one course, {barData.barGroup} graduated on time.</li>
                       <li><b>Two Only:</b> Of the {barData.count} students who failed only one course, {barData.barGroup} graduated on time.</li>
                       <li><b>Three Only:</b> Of the {barData.count} students who failed only one course, {barData.barGroup} graduated on time.</li>
                       <li><b>Four or More:</b> Of the {barData.count} students who failed only one course, {barData.barGroup} graduated on time.</li>
                     </ul>
                   </div>
                </div>

              );
          };

}

export default Data
