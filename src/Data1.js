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
          data: [],
          datum: [],
          dataKey: "all"
        };
      };

      componentWillMount = () =>  {
              this.fetchData()
          };

      fetchData = () =>  {
              var _this = this;
              axios.all([
                      axios.get('/data' + this.props.match.path +'/data.json'),
                  ])
                  .then(axios.spread(function(result) {
                    console.log(result.data)
                      _this.setState({
                          data: result.data[0],
                          datum: result.data[1],
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
              dataKey: value
            })
          };

          render = () =>  {
              const {data, datum, dataKey} = this.state;
              console.log(dataKey)
              return (
                <div>
                  <div className="col-md-6 center">
                    <h3>On time graducation rate based on classes failed by counts</h3>
                    <BlockChart data={data}/>
                  </div>
                  <div className="col-md-6 center">
                    <h3>Likelyhood of failing multiple classes by subject</h3>
                    <h4>Select a suject category to see how likely failing one of these will result in failing multiple classes</h4>
                    <Button onClick={this.handleClick} className={`btn btn-primary`} value="all">All</Button>
                    <Button onClick={this.handleClick} className={`btn btn-primary`} value="core">Core</Button>
                    <Button onClick={this.handleClick} className={`btn btn-primary`} value="noncore">Non-Core</Button>
                     <ResponsiveContainer minHeight={400}>
                       <BarChart data={datum} margin={{top: 20, right: 20, left: 10, bottom: 5}}>
                            <XAxis dataKey="label" fontSize = "1em"/>
                            <YAxis domain={[0,5]} fontSize = "1em"/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend />
                            <Bar dataKey={dataKey} fill="#43956f"/>
                       </BarChart>
                     </ResponsiveContainer>
                   </div>
                </div>

              );
          };

}

export default Data
