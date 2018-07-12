import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page3 from './containers/Page3/index.js';
import Page2 from './containers/Page2/index.js';
import Page1 from './containers/Page1/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
           <div>
             <Switch>
              <Route exact path="/map" component={Page1} />
              <Route exact path="/" component={Page2} />
              <Route exact path="/device/:deviceId" component={Page3} />
             </Switch>
           </div>
        </Router>
      </div>
    );
  }
}

export default App;
