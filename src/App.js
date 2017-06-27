import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Data from './Data'
import Data1 from './Data1'
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

        <Route exact path="/" component={Story}/>
        <Route path={`/9`} component={Data1}/>
        <Route path={`/(10|11|12)`} component={Data}/>
      </div>
    </Router>

  )

export default App;
