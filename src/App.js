import React, {
  Fragment,
  useState,
  useEffect,
} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';

import Spinner from './components/layout/Spinner';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  // Page Loader

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
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
  );
}

export default App;
