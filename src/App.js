import './App.css';
import Home from './Pages/home'
import Assurance from './Pages/assurance'
import Tax from './Pages/tax'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tax" >
        <Tax />
          </Route>
        <Route path="/assurance" >
        <Assurance />
          </Route>
        <Route path="/" >
        <Home />
          </Route>
      </Switch>
  </Router>
  );
}

export default App;
