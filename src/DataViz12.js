import React from 'react'
import axios from 'axios'
import BlockChartCount from './DataViz/BlockChartCount'
import {GradeHeader, ChartTitle, ChartSubTitle} from './DataViz/ChartTitle'
import FootNoteLink from './FootNoteLink'

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
                <div className="container target-nav" id="grade12" name="grade12">
                  <div className="row">
                    <div className="col-md-12 center">
                      <GradeHeader>12th Grade</GradeHeader>
                        <ChartTitle>Jump Start: AP courses set students ahead</ChartTitle>
                        <hr />
                    </div>
                    <div className="col-md-4 pull-right">
                      <p>Advanced Placement (AP) courses offer high school students the chance to receive college course credit before they even move into their dorms. The chance to get a head start on college credits is a major benefit to AP courses, as are the cost savings that come with reducing the number of college classes a student needs to take. However, perhaps the most important advantage to AP courses is that they expose students to college-level academics. This head start is invaluable in helping a student jump into a college atmosphere.</p>
                    </div>
                    <div className="col-md-8">
                      <BlockChartCount data={blockData} grade={12} subject="AP courses"/>
                    </div>
                  </div>
                </div>

              );
          };

}

export default Data
