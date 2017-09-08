import React from 'react';
import DataViz from './DataViz'
import DataViz9 from './DataViz9'
import DataViz10 from './DataViz10'
import Navigation from './Navigation'
import { StickyContainer, Sticky } from 'react-sticky';


const renderGrade = (currentGrade) => {
        switch(currentGrade) {
          case 9:
              return <DataViz9 />
              break;
          case 10:
              return <DataViz10 />
              break;
          default:
              return <DataViz9 />
              break;
    }
}



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
                  {renderGrade(eval(grade))}
          </StickyContainer>
    )
  }

}

export default GradeDash;
