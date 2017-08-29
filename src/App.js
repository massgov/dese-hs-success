import React from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import DataViz from './DataViz'
import DataViz9 from './DataViz9'
import DataViz10 from './DataViz10'
import Narrative from './Narrative'
import Header from './Header'
import Footer from './Footer'
import './App.css'

const App = () => (
    <Router>
      <div className="wrapper">
        <Header />
        <div className="container">
          <Narrative />
          <ul className="nav nav-tabs nav-justified">
            <li className="nav-item"><NavLink className="nav-link active"  to={`/9`}>9th Grade</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link"         to={`/10`}>10th Grade</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link"         to={`/11`}>11th Grade</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link"         to={`/12`}>12th Grade</NavLink></li>
          </ul>

          <Switch>
            <Route path={`/9`} component={DataViz9}/>
            <Route path={`/10`} component={DataViz10}/>
            <Route path={`/(11|12)`} component={DataViz}/>
            <Redirect exact from="/" to="/9"/>
          </Switch>

        </div>
        <Footer />
      </div>

    </Router>

  )

export default App;
