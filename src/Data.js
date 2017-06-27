import React from 'react'
import axios from 'axios'
import BlockChartDuo from './DataViz/BlockChartDuo'
import NVD3Chart from 'react-nvd3'
import {ResponsiveContainer,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text} from 'recharts'

class Data extends React.Component{

      constructor(props, context) {
        super(props, context);

        this.state = {
          data: [],
          datum: []
        };
      };

      componentWillMount = () =>  {
              this.fetchData()
          };

          fetchData = () =>  {
              var _this = this;
              console.log(this.props.match.url)
              axios.all([
                      axios.get('/data' + this.props.match.url +'/data.json'),
                  ])
                  .then(axios.spread(function(result) {
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

          render = () =>  {

              const {data, datum} = this.state;
              return (
                <div>
                  <BlockChartDuo data={data}/>
                </div>

              );
          };

}

export default Data
