import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Payment from './components/Payment';

import { auth } from './firebase';
import { useStateValue } from './hooks/StateProvider';


const promise = loadStripe('pk_test_51I24oGJUrD9XVOcR3ybU2gK94794MmlzJt6fvngO2GtnaxUXmkIvWP1viyFYphrZDJdUovYUThHoNY6nGaTMMYsA00bEibDVoV');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [dispatch]);

  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>        
      </div>
    </Router>
  );
}

export default App;
