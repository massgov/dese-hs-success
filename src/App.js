import React from 'react';
import Narrative from './Narrative'
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
          <Narrative />
          <GradeDash />
          <Narrative />
          <DistrictDash />
        <Footer />
        <FootNote />
      </div>
    )
  }

}

export default App;
