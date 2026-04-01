import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Forum from './components/Forum'; // Assuming a Forum component exists
import Home from './components/Home'; // Assuming a Home component exists

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/forum">Forum</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/forum" component={Forum} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
