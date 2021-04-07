
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Room from './room/Room'
import Home from  './Home/Home'
import Keyboard from './activities/keyboard/KeyboardContainer'
// import Matrix from './activities/matrix/Matrix'

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
          <li>
            <Link to="/keyboard">Keyboard</Link>
          </li>
          {/* <li>
            <Link to="/matrix">Matrix</Link>
          </li> */}
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/room">
          <Room />
        </Route>
        <Route exact path="/keyboard">
          <Keyboard />
        </Route>
        {/* <Route exact path="/matrix">
          <Matrix />
        </Route> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
