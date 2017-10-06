/* eslint no-eval: 0 */
import React from 'react'
import axios from 'axios'
import BlockChartCount from './DataViz/BlockChartCount'
import {GradeHeader, ChartTitle, ChartSubTitle} from './DataViz/ChartTitle'
import Dwnld from './Dwnld'
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
                        <div className="col-md-2">
                            <GradeHeader><span>12th</span> Grade</GradeHeader>
                            </div>
                            <div className="col-md-10">
                            <ChartTitle>Jump Start: <span>Taking AP classes help students get ahead</span></ChartTitle>
                        </div>
                      </div>
                  <div className="row">
                    <div className="grade_line col-md-2"></div>
                    <div className="grade_main col-md-10">
                      <div className="row">
                      <div className="col-md-4 pull-right">
                        <p></p>
                        <p>Advanced Placement (AP) courses are widely recognized by college admissions officers as rigorous classes that may provide high school students the chance to receive college course credit before enrolling. The chance to get a head start on college is a major benefit to AP courses, as are possible cost savings that come with reducing the number of credits a student needs to earn a college degree.<FootNoteLink index={5}/> However, perhaps the most important advantage to AP courses is that they expose students to college-level academics. This is invaluable in helping a student jump into a college atmosphere.</p>
                      </div>
                      <div className="col-md-8 center">
                        <BlockChartCount data={blockData} subject="AP courses"/>
                        <Dwnld data={'/data/12/grade_12_data.csv'}/>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>

              );
          };

}

export default Data
