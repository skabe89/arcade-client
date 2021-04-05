
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Room from './room/Room'
import Home from  './Home'

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/room">Room</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/room">
          <Room />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
