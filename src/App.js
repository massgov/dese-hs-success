import React from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
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


const App = () => (
    <Router>
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
                          <Navigation sticky={sticky}/>
                        )
                      }
                    }
                  </Sticky>
                  <Switch>
                    <Route path={`/9`} component={DataViz9}/>
                    <Route path={`/10`} component={DataViz10}/>
                    <Route path={`/(11|12)`} component={DataViz}/>
                    <Redirect exact from="/" to="/9"/>
                  </Switch>
          </StickyContainer>
          <DistrictDash />
        <Footer />
        <FootNote />
      </div>

    </Router>

  )

export default App;
