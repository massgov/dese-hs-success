import React from 'react'
import axios from 'axios'
import BlockChartCount from './DataViz/BlockChartCount'
import {GradeHeader, ChartTitle} from './DataViz/ChartTitle'
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
                          axios.get('/data/11/data.json'),
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

              if(blockData.length===0) {
                return <div className="container">Loading...</div>
              }

              return (
                <div className="container target-nav" id="grade11" name="grade11">
                  <div className="row">
                    <div className="col-md-12 center">
                      <GradeHeader>11th Grade</GradeHeader>
                        <ChartTitle>Math Matters: Relationship between math and college enrollment</ChartTitle>
                        <hr />
                    </div>
                    <div className="col-md-4">
                      <p>High-level math classes are important to a student’s development, not just because of the content covered, but because of the critical thinking skills required to master these courses. Successfully taking on the challenge of Algebra II in grade 11, for example, has a big impact on a student’s future. Specifically, high school juniors who pass Algebra II or a higher-level math course tend to stay in college longer than their peers.</p>
                    </div>
                    <div className="col-md-8 center">
                      <BlockChartCount data={blockData} grade={12} subject="Algera II"/>
                    </div>
                  </div>

                </div>

              );
          };

}

export default Data
