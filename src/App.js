import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Dashboard from './Dashboard'
import Dashboard_9 from './Dashboard_9'
import Story from './Story'

const App = () => (
    <Router>
      <div>
        <Story />
        <ul>
          <li><Link to={`/9`}>9th Grade</Link></li>
          <li><Link to={`/10`}>10th Grade</Link></li>
          <li><Link to={`/11`}>11th Grade</Link></li>
          <li><Link to={`/12`}>12th Grade</Link></li>
        </ul>

        <Route exact path="/" component={Dashboard_9}/>
          <Route path={`/9`} component={Dashboard_9}/>
          <Route path={`/(10|11|12)`} component={Dashboard}/>
      </div>
    </Router>

  )

export default App;
