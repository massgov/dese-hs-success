import React from 'react'
import axios from 'axios'
import BlockChartCount from './DataViz/BlockChartCount'
import {ChartTitle, ChartSubTitle} from './DataViz/ChartTitle'
import FootNoteLink from './FootNoteLink'
import Description from './Description'

class Data extends React.Component{

      constructor(props, context) {
        super(props, context);

        this.state = {
          blockData: [],
        };

      };

      componentWillMount = () =>  {
              this.fetchData()
          };

          fetchData = () =>  {
                  var _this = this;
                  axios.all([
                          axios.get('/data/12/data.json'),
                      ])
                      .then(axios.spread(function(result) {
                        var data = eval(result.data)
                          _this.setState({
                              blockData: data,
                          });
                      }))
                      .catch((error) => {console.log(error)})

              };

          componentWillUnmount = () => {
              this.ignoreLastFetch = true
          };

          render = () =>  {
            const {blockData} = this.state;

              if(blockData.length==0) {
                return <div className="container">Loading...</div>
              }

              return (
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 center">
                        <ChartTitle>AP Courses Set Students Ahead</ChartTitle>
                        <hr />
                    </div>
                  </div>
                      <BlockChartCount data={blockData}/>
                  <div className="row">
                    <Description>
                      <p>Research shows that students who succeed in rigorous course work such as Advanced Placement are developing college-level knowledge and skills while still in high school. These students are more likely than their peers to earn college degrees on time, providing an opportunity to save significant amounts of money. In fact, we found that students….</p>
                    </Description>
                  </div>
                </div>

              );
          };

}

export default Data
