
import './App.css';
import Room from './room/Room'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Room />
    </div>
  );
}

export default App;
