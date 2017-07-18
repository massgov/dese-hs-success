import React from 'react'
import axios from 'axios'
import BlockChartDuo from './DataViz/BlockChartDuo'
import {ResponsiveContainer,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text} from 'recharts'

class Data extends React.Component{

      constructor(props, context) {
        super(props, context);

        this.state = {
          data: []
        };

      };

      componentWillMount = () =>  {
              this.fetchData()
          };

          componentDidUpdate = (prevProps) =>  {
              let oldId = prevProps.match.url
              let newId = this.props.match.url
              if (newId !== oldId)
              this.fetchData()
          };

          fetchData = () =>  {
              var _this = this;
              axios.all([
                      axios.get('/data' + this.props.match.url +'/data.json'),
                  ])
                  .then(axios.spread(function(result) {
                      _this.setState({
                          data: eval(result.data),
                      });
                  }))
                  .catch((error) => {console.log(error)})

          };

          componentWillUnmount = () => {
              this.ignoreLastFetch = true
          };

          render = () =>  {
            const {data} = this.state;

              if(data.length==0) {
                return <div>Loading...</div>
              }

              return (
                <div>
                  <BlockChartDuo data={data}/>
                </div>

              );
          };

}

export default Data
