import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import MainPage from './Components/MainPage.js';
import Details from './Components/Details.js';
import { loadCrypto } from './redux/reducers/cryptoReducers';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCrypto());
  }, []);

  return (
    <div>
      <Router basename="/">
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
        <Details />
      </Router>
    </div>
  );
}

export default App;
