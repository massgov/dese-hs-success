import React from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import Dashboard from './Dashboard'
import Dashboard_9 from './Dashboard_9'
import Dashboard10 from './Dashboard10'
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
            <Route path={`/9`} component={Dashboard_9}/>
            <Route path={`/(11|12)`} component={Dashboard}/>
            <Route path={`/10`} component={Dashboard10}/>
            <Redirect exact from="/" to="/9"/>
          </Switch>

        </div>
        <Footer />
      </div>

    </Router>

  )

export default App;
