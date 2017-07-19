import React from 'react'
import { Button } from 'react-bootstrap'
import './BlockChart.css'
import Options from './Options'
import PersonLegend from './PersonLegend'

class BlockChart extends React.Component{
      constructor(props, context) {
        super(props, context);
        var init = this.prepData('0', 'rate_enroll')
        this.state = {
          Yes: init.Yes,
          No: init.No,
          count: init.count,
          indicator: init.indicator,
          metric: init.metric,
          array: [],
          clickedButton: '0',
          selectedOption: 'rate_enroll',
        };

      };

      componentWillMount = () => {
        const {Yes, No} = this.state;
        this.pushArray(Yes,No)
      };

      componentDidUpdate = (prevProps) =>  {
          let oldData = prevProps.data
          let newData = this.props.data
          if (newData !== oldData)
          this.getData('0', 'rate_enroll')
      };

      isActive = (value) => {
        return 'btn '+((value===this.state.clickedButton) ?'active':'default');
      };
      render = () =>  {

        const {count, clickedButton, selectedOption, indicator, metric, array} = this.state
         var blockPeople1 = this.makeChart(array[0])
         var blockPeople2 = this.makeChart(array[1])
          return (
            <div>
              <div className="col-md-4">
                <form>
                <hr />
                <p>Select an indicators:</p>
                      <Button onClick={this.handleClick} className={`btn btn-primary + ${this.isActive('0')}`} value={0}>{indicator[0]}</Button>
                      <Button onClick={this.handleClick} className={`btn btn-primary + ${this.isActive('1')}`} value={1}>{indicator[1]}</Button>
                <hr />
                  <p>Select an outcome:</p>
                    <div className="radio">
                      <label><input type="radio" name="outcome" value="rate_enroll" checked={selectedOption==='rate_enroll'} onChange={this.handleOptionChange}/>College Enrollment</label>
                    </div>
                    <div className="radio">
                      <label><input type="radio" name="outcome" value="rate_persist" checked={selectedOption==='rate_persist'} onChange={this.handleOptionChange}/>College Persistence</label>
                    </div>
                </form>
                <hr />
                <PersonLegend>1% of the total number of students</PersonLegend>
              </div>
                    <div className="col-md-8">
                      <div className="col-md-6 left">
                        <h3>{metric[0]+ ' '+indicator[clickedButton]}</h3>
                        <h4>Total number of students: {count[0]} </h4>
                        <hr />
                        <div className="block-chart">
                            {blockPeople1}
                        </div>
                      </div>
                      <div className="col-md-6 right">
                        <h3>{metric[1]+ ' '+indicator[clickedButton]}</h3>
                        <h4>Total number of students: {count[1]} </h4>
                        <hr />
                          <div className="block-chart">
                            {blockPeople2}
                          </div>
                      </div>
                </div>
            </div>


          );
      };

      handleClick = (clickEvent) =>  {
        this.getData(clickEvent.target.value,undefined)
      };

      handleOptionChange = (changeEvent) => {
        this.getData(undefined,changeEvent.target.value)
      };

      getData = (clickedButton,selectedOption) => {
        clickedButton = (typeof clickedButton!== 'undefined') ? clickedButton: this.state.clickedButton
        selectedOption = (typeof selectedOption!== 'undefined') ? selectedOption: this.state.selectedOption
        var prepData = this.prepData(clickedButton,selectedOption)
        this.pushArray(prepData.Yes, prepData.No)
        this.setState({
            Yes: prepData.Yes,
            No: prepData.No,
            count: prepData.count,
            metric: prepData.metric,
            indicator: prepData.indicator,
            clickedButton, selectedOption
        });
      };

      prepData = (i,j) => {
        var data = this.props.data
        var dataset = data[i];
        var Yes = [], No = [], count = [],metric = [], indicator=[]
        Yes[0] = dataset[0][j];
        Yes[1] = dataset[1][j];
        No[0] = 100-Yes[0];
        No[1] = 100-Yes[1];
        count[0] = dataset[0].count;
        count[1] = dataset[1].count;
        metric[0] = dataset[0].metric;
        metric[1] = dataset[1].metric;
        indicator[0] = data[0][0].indicator;
        indicator[1] = data[1][0].indicator;
        return { Yes, No, count, metric, indicator }
      }

      createArray = (Yes, No) => {
        var arr = []
        for(var y=0; y<Yes; y++){
          arr.push('Yes');
        };
        for(var n=0; n<No; n++){
          arr.push('No');
        };
        return arr;
      };

      pushArray = (Yes, No) => {
        var array = []
        array[0] = this.createArray(Yes[0], No[0])
        array[1] = this.createArray(Yes[1], No[1])
        this.setState({
            array: array
        });
      };

      makeChart = (array) => {
        return (array.map(function(person, i){
            return <div className={"block color_" + array[i]} data-index={i} key={"person_" + i}></div>
        }))
      };



}

export default BlockChart
