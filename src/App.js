import React, { useEffect, useState} from 'react';

import HeaderTemplate  from './components/Header/HeaderTemplate';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from './redux/actions/pizzas';

function App() {
    const pizzasList = useSelector(state => state.pizza.pizzas);
    const dispatch = useDispatch();

    useEffect( () => {
        // fetchPizzas(dispatch)
        dispatch(fetchPizzas())
    }, []);
  return (
    <div className="wrapper">
        <HeaderTemplate />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzasList} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
