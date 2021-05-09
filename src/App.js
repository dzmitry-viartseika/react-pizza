import React, { useEffect, useState} from 'react';

import HeaderTemplate  from './components/Header/HeaderTemplate';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import pizzaApi from './api/pizzaApi/api';
import { useDispatch, useSelector } from "react-redux";
import { setPizzas } from './redux/actions/pizzas';

function App() {
    const pizzasList = useSelector(state => state.pizza.pizzas);
    const dispatch = useDispatch();

    const getPizzas = async () => {
        try {
            const response = await pizzaApi.getPizzasList();
            const { data: { pizzas: pizzasList } } = response;
            dispatch(setPizzas(pizzasList));
        } catch (e) {
            console.error(e)
        }
    }

    useEffect( () => {
        getPizzas()
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
