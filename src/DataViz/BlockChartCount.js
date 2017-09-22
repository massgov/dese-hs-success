import React from 'react'
import Btn from '../Btn'
import BtnGroup from '../BtnGroup'
import './BlockChart.css'
import BlockLegend from './BlockLegend'
import BlockTable from './BlockTable'
import BlockCount from './BlockCount'
import { ChartSubTitle } from './ChartTitle'
import Description from '../Description'
import BlockCountLegend from './BlockCountLegend'
import './BlockChartCount.css'

class BlockChart extends React.Component{
      constructor(props, context) {
        super(props, context);
        const {Yes_1, Yes_2, No_1, No_2, description, array, array2, rate_pass, rate_fail} = this.getData('0');
        console.log(rate_pass)
        this.state = {
          selected: 0,
          Yes_1, Yes_2, No_1, No_2, description, array, array2, rate_pass, rate_fail
        };
      };


      render = () =>  {
          const {Yes_1, Yes_2, No_1, No_2, description, array, array2, selected, rate_pass, rate_fail} = this.state;
          const {grade, subject} = this.props
          const uniqueArray = array.filter(function(item, pos){
            return array.indexOf(item)== pos;
          });
          return(
                <div>
                  <div className="row">
                    <div className="col-md-12 center">
                        <BtnGroup>
                          <Btn handleClick={this.handleClick} value={0} selected={selected}>1. Participated in {subject}</Btn>
                          <Btn handleClick={this.handleClick} value={1} selected={selected}>2. Enrolled in College</Btn>
                          <Btn handleClick={this.handleClick} value={2} selected={selected}>3. Stayed in College</Btn>
                        </BtnGroup>
                    </div>
                  </div>
                    <div className="row">
                    <div className="col-md-12">
                          <p>{description[0]} <span className="highlight_Yes">{rate_pass}%</span> {description[1]} <span className="highlight_No">{rate_fail}%</span> {description[2]}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 center">
                          <div className="block-group">
                            <BlockCount array = {array}>Took and passed {subject}</BlockCount>
                            <BlockCount array = {array2}>Did not take or pass {subject}</BlockCount>
                          </div>
                          <BlockLegend type="default">100 students</BlockLegend>
                    </div>
                  </div>
                </div>

          );
      };

      handleClick = (event) =>  {
        var selected = event.target.value;
        this.setData(selected)
      };

      setData = (selected) => {
        const getData = this.getData(selected);
        this.setState({
            Yes_1: getData.Yes_1,
            Yes_2: getData.Yes_2,
            No_1: getData.No_1,
            No_2: getData.No_2,
            rate_pass: getData.rate_pass,
            rate_fail: getData.rate_fail,
            description: getData.description,
            selected: selected,
            array: getData.array,
            array2: getData.array2
        });
      };

      getData = (selected) => {
        const data = this.props.data[selected];
        const Yes_1 = data.count_pass_hightlight;
        const Yes_2 = data.count_pass-Yes_1;
        const No_1 = data.count_fail_hightlight;
        const No_2 = data.count_fail-No_1;
        const description = data.description;
        const rate_pass = data.rate_pass*100;
        const rate_fail = data.rate_fail*100;
        var array = this.createArray(Yes_1, Yes_2)
        var array2 = this.createArray(No_1, No_2)
        return { Yes_1, Yes_2, No_1, No_2, description, array, array2, rate_pass, rate_fail}
      }

      createArray = (Yes, No) => {
        var arr=[]
        for(var y=0; y<Yes; y++){
          arr.push('Yes');
        };
        for(var n=0; n<No; n++){
          arr.push('No');
        };
        return arr
      };

}

export default BlockChart
