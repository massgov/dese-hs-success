import React from 'react'
import axios from 'axios'
import BlockChart from './DataViz/BlockChart'
import {ChartTitle, ChartSubTitle} from './DataViz/ChartTitle'
import Description from './Description'

class Data extends React.Component{

      constructor(props, context) {
        super(props, context);

        this.state = {
          blockData1: [],
          blockData2: []
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
                        var data = eval(result.data)
                          _this.setState({
                              blockData1: data[0],
                              blockData2: data[1],
                          });
                      }))
                      .catch((error) => {console.log(error)})

              };

          componentWillUnmount = () => {
              this.ignoreLastFetch = true
          };

          render = () =>  {
            const {blockData1, blockData2} = this.state;
            const url = this.props.match.url

              if(blockData1.length==0) {
                return <div>Loading...</div>
              }

              return (
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 center">
                      <ChartTitle>10th Grade Attendance Behavior</ChartTitle>
                      <BlockChart data={blockData1}/>
                    </div>
                    <div className="col-md-6 center">
                      <ChartTitle>10th Grade Suspension Behavior</ChartTitle>
                      <BlockChart data={blockData2}/>
                    </div>
                  </div>
                  <div className="row">
                    <Description>
                      <p>Attendance and Behavior matters in all grades!</p>
                    </Description>
                  </div>


                </div>

              );
          };

}

export default Data
