import React from 'react'
import axios from 'axios'
import BlockChartDuo from './DataViz/BlockChartDuo'
import {ChartTitle, ChartSubTitle} from './DataViz/ChartTitle'

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
            const url = this.props.match.url

              if(data.length==0) {
                return <div>Loading...</div>
              }

              return (
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 center">
                        <ChartTitle>*{url}th Grade Section Header*</ChartTitle>
                        <hr />
                    </div>
                  </div>
                  <div className="container">
                      <BlockChartDuo data={data} url={url}/>
                  </div>
                </div>


              );
          };

}

export default Data
