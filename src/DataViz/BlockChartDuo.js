import React from 'react'
import { Button } from 'react-bootstrap'
import './BlockChart.css'

class BlockChart extends React.Component{
      constructor(props, context) {
        super(props, context);

        this.state = {
          Yes: 96,
          No: 4,
          count: 54038,
          array: [],
          clickedButton: '0',
          selectedOption: 'rate_grad',
          indicators: ['Math', 'Science'],
          metric: ["Completed", "Did Not Complete"]
        };
      };

      componentDidMount = () => {
        const {Yes, No} = this.state;
        this.createArray(Yes, No)
      };

      isActive = (value) => {
        return 'btn '+((value===this.state.clickedButton) ?'active':'default');
      };
      render = () =>  {
          const {count, clickedButton, selectedOption, indicators, metric} = this.state
          var blockPeople = this.makeChart()
          return (
            <div>
              <div className="col-md-4">
                <form>
                <hr />
                <p>Select an indicators:</p>
                      <Button onClick={this.handleClick} className={`btn btn-primary + ${this.isActive('0')}`} value={0}>{indicators[0]}</Button>
                      <Button onClick={this.handleClick} className={`btn btn-primary + ${this.isActive('1')}`} value={1}>{indicators[1]}</Button>
                <hr />
                  <p>Select an outcome:</p>
                    <div className="radio">
                      <label><input type="radio" name="outcome" value="rate_enroll" checked={selectedOption==='rate_enroll'} onChange={this.handleOptionChange}/>College Enrollment</label>
                    </div>
                    <div className="radio">
                      <label><input type="radio" name="outcome" value="rate_persist" checked={selectedOption==='rate_persist'} onChange={this.handleOptionChange}/>College Persistence</label>
                    </div>
                  <div id="legend">
                    <img src="/images/person.svg" width="25px" height="25px" alt="a person icon"/><span>= 1% of the students<p /></span>
                  </div>
                </form>

              </div>
                    <div className="col-md-8">
                      <div className="col-md-6 left">
                        <h3>{metric[0]+ ' '+indicators[clickedButton]}</h3>
                        <h4>Total number of students: {count[0]} </h4>
                        <hr />
                        <div className="block-chart">
                          {blockPeople}
                        </div>
                      </div>
                      <div className="col-md-6 right">
                        <h3>{metric[1]+ ' '+indicators[clickedButton]}</h3>
                        <h4>Total number of students: {count[1]} </h4>
                        <hr />
                          <div className="block-chart">
                            {blockPeople}
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
        var i = clickedButton
        var dataset = this.props.data[i];
        var Yes = dataset[i][selectedOption];
        var No = 100-Yes;
        var count = [],metric = [];
        count[0] = dataset[0].count;
        count[1] = dataset[1].count;
        metric[0] = dataset[0].metric;
        metric[1] = dataset[1].metric;
                console.log(metric, count)
        this.createArray(Yes, No)
        this.setState({
            Yes: Yes,
            No: No,
            count: count,
            metric: metric,
            clickedButton: clickedButton,
            selectedOption: selectedOption

        });
      };

      createArray = (Yes, No) => {
        var arr=[];
        for(var y=0; y<Yes; y++){
          arr.push('Yes');
        };
        for(var n=0; n<No; n++){
          arr.push('No');
        };
        this.setState({
            array: arr
        });
      };

      makeChart = () => {
        const {array} = this.state;
        return (array.map(function(person, i){
            return <div className={"block color_" + array[i]} data-index={i} key={"person_" + i}></div>
        }))
      };



}

export default BlockChart
