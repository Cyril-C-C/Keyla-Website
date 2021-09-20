import React, { Fragment }from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';

import './App.css';

function App() {
  return (
    <div>
      <Fragment>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              {/* <Route exact path='/about' component={About} /> */}
            </Switch>
          </div>
        </Fragment>
    </div>
  );
}

export default App;
