import React from 'react'
import Btn from '../Btn'
import BtnGroup from '../BtnGroup'
import './BlockChart.css'
import BlockLegend from './BlockLegend'
import BlockCount from './BlockCount'
import './BlockChartCount.css'

class BlockChart extends React.Component{
      constructor(props, context) {
        super(props, context);
        const { description, array, array2, rate_pass, rate_fail, total_count_pass, total_count_fail } = this.getData('0');
        this.state = {
          selected: 0,
          description, array, array2, rate_pass, rate_fail, total_count_pass, total_count_fail
        };
      };


      render = () =>  {
          const {description, array, array2, selected, rate_pass, rate_fail, total_count_pass, total_count_fail } = this.state;
          const {subject} = this.props
          const uniqueArray = array.filter(function(item, pos){
            return array.indexOf(item)== pos;
          });
          var fail, pass, hightlightStyle, blockTitleYes, blockTitleNo;
          if(uniqueArray[0] === "No"){
            fail = total_count_fail.toLocaleString();
            pass = total_count_pass.toLocaleString();
            hightlightStyle = 'highlight_No'
          }else{
            fail = Math.round(rate_fail) + '%';
            pass = Math.round(rate_pass) + '%';
            hightlightStyle = 'highlight_Yes'
          }
          if(subject === 'AP courses'){
            blockTitleYes = 'Took an AP course'
            blockTitleNo = 'Did not take an AP course'
          } else {
            blockTitleYes = 'Took and passed Algebra II'
            blockTitleNo = 'Did not take or pass Algebra II'
          }
          return (
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
                    <div className="col-md-12 center">
                        <div className="block-group">
                            <div className="col-md-6 center">
                              <div className="col-md-12 col-sm-6 block-desc">
                                <p>{description[0]} <span className={hightlightStyle}>{pass}</span> {description[1]}</p>
                              </div>
                              <BlockCount array = {array}>{blockTitleYes}</BlockCount>
                            </div>
                            <div className="col-md-6 center">
                              <div className="col-md-12 col-sm-6 block-desc">
                                <p>{description[2]} <span className={hightlightStyle}>{fail}</span> {description[3]}</p>
                              </div>
                              <BlockCount array = {array2}>{blockTitleNo}</BlockCount>
                            </div>
                        </div>
                    </div>
                    <BlockLegend type="default">100 students</BlockLegend>
                  </div>
              </div>

            )
      };

      handleClick = (event) =>  {
        var selected = event.target.value;
        this.setData(selected)
      };

      setData = (selected) => {
        const getData = this.getData(selected);
        this.setState({
            rate_pass: getData.rate_pass,
            rate_fail: getData.rate_fail,
            total_count_pass: getData.total_count_pass,
            total_count_fail: getData.total_count_fail,
            description: getData.description,
            selected: selected,
            array: getData.array,
            array2: getData.array2
        });
      };

      getData = (selected) => {
        const data = this.props.data[selected];
        const Yes_1 = data.count_pass_hightlight;
        const Yes_alt = data.count_pass_faded;
        const Yes_2 = data.count_pass-Yes_1-Yes_alt;
        const No_1 = data.count_fail_hightlight;
        const No_alt = data.count_fail_faded;
        const No_2 = data.count_fail-No_1-No_alt;
        const description = data.description;
        const rate_pass = data.rate_pass*100;
        const rate_fail = data.rate_fail*100;
        const total_count_pass = data.total_count_pass;
        const total_count_fail = data.total_count_fail;
        var array = this.createArray(Yes_1, Yes_alt, Yes_2)
        var array2 = this.createArray(No_1, No_alt, No_2)
        return { Yes_1, Yes_2, No_1, No_2, description, array, array2, rate_pass, rate_fail, total_count_pass, total_count_fail }
      }

      createArray = (Hightlight, Faded, Grayout) => {
        var arr=[],x,y,z
        for(x=0; x<Hightlight; x++){
          arr.push('Yes');
        };
        for(y=0; y<Faded; y++){
          arr.push('alt');
        };
        for(z=0; z<Grayout; z++){
          arr.push('No');
        };
        return arr
      };

}

export default BlockChart
