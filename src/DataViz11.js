import React from 'react'
import axios from 'axios'
import BlockChartCount from './DataViz/BlockChartCount'
import {ChartTitle, ChartSubTitle} from './DataViz/ChartTitle'
import FootNoteLink from './FootNoteLink'
import Description from './Description'
import Introduction from './Introduction'

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

              if(blockData.length==0) {
                return <div className="container">Loading...</div>
              }

              return (
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 center">
                        <ChartTitle>Math Matters: Relationship between 11th grade math and college enrollment</ChartTitle>
                        <Introduction>
                        <p>Algebra II is a rigorous math class that builds on content covered in Algebra I. Although students may feel that they ‘won’t use math’ after high school, the academic and life skills developed through taking and passing this class can prepare students to succeed in college and beyond In other words, if a student has receives the relevant math education in high school, two things become much more likely. First, that child will have a higher likelihood of going to college. And second, that child will likely be more successful in college and careers beyond. The narrative visualization below provides details around the ties between Algebra II and college success.</p>
                        </Introduction>
                        <hr />
                    </div>
                  </div>
                      <BlockChartCount data={blockData}/>
                  <div className="row">
                    <Description>
                      <p>Action Steps: Did not take math..do this!</p>
                    </Description>
                  </div>
                </div>

              );
          };

}

export default Data
