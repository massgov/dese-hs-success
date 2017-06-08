import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Data from './Data'
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

        <hr/>

        <Route exact path="/" component={Story}/>
        <Route path={`/:year`} component={Data}/>
      </div>
    </Router>

  )

export default App;
