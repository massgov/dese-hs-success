import React from 'react';
import DataViz from './DataViz'
import DataViz9 from './DataViz9'
import DataViz10 from './DataViz10'
import Narrative from './Narrative'
import Header from './Header'
import Footer from './Footer'
import FootNote from './FootNote'
import Navigation from './Navigation'
import DistrictDash from './DistrictDash'
import './App.css'
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



class App extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      grade: 9,
      value: 'navbar-collapse'
    }
  }

  handleClick = (e) =>  {
    e.preventDefault();
    this.setState({
      grade : e.target.getAttribute("value"),
      value : 'navbar-collapse'
    })

  };
  render() {
    const { value, grade } = this.state
    console.log(value)
    return (
      <div className="wrapper">
        <Header />
          <Narrative />
              <StickyContainer key={1}>
                  <Sticky>
                    {
                      (props) => {
                        console.log(props)
                        var sticky
                        if (props.isSticky){
                          sticky = true
                        } else { sticky = false }
                        return (
                          <Navigation handleClick={this.handleClick} sticky={sticky} value={value} grade={grade}/>
                        )
                      }
                    }
                  </Sticky>
                  {renderGrade(eval(grade))}
          </StickyContainer>
          <DistrictDash />
        <Footer />
        <FootNote />
      </div>
    )
  }

}

export default App;
