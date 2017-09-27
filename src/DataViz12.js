import React from 'react'
import axios from 'axios'
import BlockChartCount from './DataViz/BlockChartCount'
import {GradeHeader, ChartTitle} from './DataViz/ChartTitle'
import FootNoteLink from './FootNoteLink'
import Dwnld from './Dwnld'

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
                            <ChartTitle>Jump Start: <br />AP courses set students ahead</ChartTitle>
                        </div>
                      </div>
                    <div className="col-md-4 pull-right">
                      <p>Advanced Placement (AP) courses offer high school students the chance to receive college course credit before they even move into their dorms. The chance to get a head start on college credits is a major benefit to AP courses, as are the cost savings that come with reducing the number of college classes a student needs to take. However, perhaps the most important advantage to AP courses is that they expose students to college-level academics. This head start is invaluable in helping a student jump into a college atmosphere.</p>
                    </div>
                    <div className="col-md-8 center">
                      <BlockChartCount data={blockData} grade={12} subject="AP courses"/>
                      <Dwnld data={'/data/12/data.json'}/>
                    </div>
                  </div>

              );
          };

}

export default Data
