import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../scss/App.scss';
import NavTop from './NavTop'
import About from './About'
import Feed from './Feed'
import Apply from './ApplicationForm'
import Shop from './Shop'

function App() {
  return (
    <Router>
      <div className="App">
        <NavTop />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/feed" component={Feed}/>
          <Route path="/apply" component={Apply}/>
          <Route path="/shop" component={Shop}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default App;
