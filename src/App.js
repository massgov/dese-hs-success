import React from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import Dashboard from './Dashboard'
import Dashboard_9 from './Dashboard_9'
import Story from './Story'
import Footer from './Footer'

const App = () => (
    <Router>
      <div>
        <Story />
        <ul className="nav nav-tabs nav-justified">
          <li className="nav-item"><NavLink className="nav-link active"  to={`/9`}>9th Grade</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link"         to={`/10`}>10th Grade</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link"         to={`/11`}>11th Grade</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link"         to={`/12`}>12th Grade</NavLink></li>
        </ul>

        <Redirect from="/" to="/9"/>
          <Route path={`/9`} component={Dashboard_9}/>
          <Route path={`/(10|11|12)`} component={Dashboard}/>
        <Footer />
      </div>
    </Router>

  )

export default App;
