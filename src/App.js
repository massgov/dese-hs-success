import React from 'react';
import Header from './Header'
import Footer from './Footer'
import FootNote from './FootNote'
import DataStory from './DataStory'
import DistrictDash from './DistrictDash'
import './App.css'


class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
          <DataStory />
          <DistrictDash />
        <Footer />
        <FootNote />
      </div>
    )
  }

}

export default App;
