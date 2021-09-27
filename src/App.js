import React, { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';

import KeylaContext from './context/keyla/keylaContext';
import KeylaState from './context/keyla/KeylaState';
import Spinner from './components/layout/Spinner';

import './App.css';

function App() {
  const keylaContext = useContext(KeylaContext);

  const loading = keylaContext;

  return (
    <KeylaState>
      <Router>
        {!loading ? (
          <Fragment>
            <Navbar />
            <section className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
              </Switch>
            </section>
          </Fragment>
        ) : (
          <Spinner />
        )}
      </Router>
    </KeylaState>
  );
}

export default App;
