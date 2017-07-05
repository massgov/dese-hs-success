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
          selectedOption: 'grad',
          indicators: ['Math', 'Science'],
          metric: ''
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
          console.log(indicators)

          // const indicators = ["Math", "Science"]
          // const metric = ["Completed", "Did Not Complete"]
          var blockPeople = this.makeChart()
          return (
            <div>
              <div className="col-md-4">
                <hr />
                <p>Select an indicators:</p>
                      <Button onClick={this.handleClick} className={`btn btn-primary + ${this.isActive('0')}`} value={0}>{indicators[0]}</Button>
                      <Button onClick={this.handleClick} className={`btn btn-primary + ${this.isActive('1')}`} value={1}>{indicators[1]}</Button>
                <hr />
                <form>
                  <p>Select an outcome:</p>
                    <div className="radio">
                      <label><input type="radio" name="outcome" value="grad" checked={selectedOption==='grad'} onChange={this.handleOptionChange}/>On-time Graduation</label>
                    </div>
                    <div className="radio">
                      <label><input type="radio" name="outcome" value="enroll" checked={selectedOption==='enroll'} onChange={this.handleOptionChange}/>College Enrollment</label>
                    </div>
                    <div className="radio">
                      <label><input type="radio" name="outcome" value="persist" checked={selectedOption==='persist'} onChange={this.handleOptionChange}/>College Persistence</label>
                    </div>
                  <div id="legend">
                    <img src="/images/person.svg" width="25px" height="25px" alt="a person icon"/><span>= 1% out of {count} students who {}<p /></span>
                  </div>
                </form>

              </div>
                    <div className="col-md-8">
                      <div className="col-md-6 left">
                        <h3>{metric+ ' '+indicators[clickedButton]}</h3>
                        <h4>Total number of students: {count} </h4>
                        <hr />
                        <div className="block-chart">
                          {blockPeople}
                        </div>
                      </div>
                      <div className="col-md-6 right">
                        <h3>{metric+ ' '+indicators[clickedButton]}</h3>
                        <h4>Total number of students: {count} </h4>
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
        var outcome = selectedOption
        var dataset = this.props.data[i];
        var Yes = dataset[i][`rate_`+selectedOption];
                console.log(selectedOption)
        console.log(this.state.indicators[clickedButton])

        var No = 100-Yes;
        var count = dataset[i].count;
        var metric = dataset[i].metric;
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
