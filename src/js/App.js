import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../scss/App.scss';
import NavTop from './NavTop'
import Home from './Home'
import About from './About'
import Feed from './Feed'
import Apply from './ApplicationForm'
import Shop from './Shop'

function App() {
  return (    
    <Router>
    <div className="app">
        <Switch>
        <Route path="/" exact component={Home}/>  
          <>
            <NavTop />
            
            <Route path="/about" component={About}/>
            <Route path="/feed" component={Feed}/>
            <Route path="/apply" component={Apply}/>
            <Route path="/shop" component={Shop}/>
          </>
        </Switch>
        </div>
      </Router>
  );
}

export default App;
