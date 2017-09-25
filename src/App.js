import React from 'react';
import Intro from './Intro'
import Conclusion from './Conclusion'
import Header from './Header'
import Footer from './Footer'
import FootNote from './FootNote'
import GradeDash from './GradeDash'
import DistrictDash from './DistrictDash'
import './App.css'
import { StickyContainer, Sticky } from 'react-sticky';


class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
          <Intro />
          <GradeDash />
          <Conclusion />
          <DistrictDash />
        <Footer />
        <FootNote />
      </div>
    )
  }

}

export default App;
