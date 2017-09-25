import React from 'react';
import DataViz9 from './DataViz9'
import DataViz10 from './DataViz10'
import DataViz11 from './DataViz11'
import DataViz12 from './DataViz12'
import Navigation from './Navigation'
import Intro from './Intro'
import Conclusion from './Conclusion'
import { StickyContainer, Sticky } from 'react-sticky';


class GradeDash extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      grade: 9,
    }
  }

  handleClick = (e) =>  {
    e.preventDefault();
    this.setState({
      grade : e.target.getAttribute("value"),
    })

  };
  render() {
    const { grade } = this.state
    return (
          <StickyContainer key={1}>
                  <Sticky>
                    {
                      (props) => {
                        var sticky
                        if (props.isSticky){
                          sticky = true
                        } else { sticky = false }
                        return (
                          <Navigation handleClick={this.handleClick} sticky={sticky} grade={grade}/>
                        )
                      }
                    }
                  </Sticky>
                  <Intro />
                  <DataViz9 />
                  <DataViz10 />
                  <DataViz11 />
                  <DataViz12 />
                  <Conclusion />
          </StickyContainer>
    )
  }

}

export default GradeDash;
