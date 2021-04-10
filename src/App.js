
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Room from './room/Room'
import Home from  './Home/Home'
import Keyboard from './activities/keyboard/KeyboardContainer'
import Bounce from './activities/bounce/Bounce'
import BounceContainer from './activities/bounce/BounceContainer';
import { connect } from 'react-redux'
import React, {Component } from 'react';

class App extends Component {

 

  render(){


  if( Object.keys(this.props.user).length !== 0){
  return (
    <Router>
    <div>
      {console.log(this.props)}
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
          <li>
            <Link to="/bounce">Bounce</Link>
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
        <Route exact path="/keyboard">
          <Keyboard />
        </Route>
        <Route exact path="/bounce">
          <BounceContainer />
        </Route>
      </Switch>
    </div>
    </Router>
  );
  }
  else{
    return(
      <div>
        <Home />
      </div>
    )
  }

  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
