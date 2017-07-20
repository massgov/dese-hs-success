import React from 'react'
import { Button } from 'react-bootstrap'
import './BlockChart.css'
import Options from './Options'
import PersonLegend from './PersonLegend'
import Block from './Block'
import BlockDuoTitle from './BlockDuoTitle'

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
        const outcomeOptions = (this.props.url==="/10")?
        (<div>Outcome: On-time graduation</div>):
        (<Options selectedOption={this.state.selectedOption} handleOptionChange={this.handleOptionChange} />)
          return (
            <div>
              <div className="col-md-4">
                <form>
                <hr />
                <p>Select an indicators:</p>
                      <Button onClick={this.handleClick} className={`btn btn-primary + ${this.isActive('0')}`} value={0}>{indicator[0]}</Button>
                      <Button onClick={this.handleClick} className={`btn btn-primary + ${this.isActive('1')}`} value={1}>{indicator[1]}</Button>
                <hr />
                  {outcomeOptions}
                </form>
                <hr />
                <PersonLegend>1% of the total number of students</PersonLegend>
              </div>
                    <div className="col-md-8">
                      <div className="col-md-6 left">
                        <BlockDuoTitle count={count} indicator={indicator} metric={metric} clickedButton={clickedButton} i={0} />
                        <Block array = {array[0]} />
                      </div>
                      <div className="col-md-6 right">
                        <BlockDuoTitle count={count} indicator={indicator} metric={metric} clickedButton={clickedButton} i={1} />
                        <Block array = {array[1]} />
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
        Yes = [dataset[0][j], dataset[1][j]] ;
        No = [100-Yes[0], 100-Yes[1]];
        count = [dataset[0].count, dataset[1].count];
        metric = [dataset[0].metric, dataset[1].metric];
        indicator = [data[0][0].indicator, data[1][0].indicator];
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

}

export default BlockChart
