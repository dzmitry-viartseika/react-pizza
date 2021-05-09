import React, { useEffect, useState} from 'react';

import HeaderTemplate  from './components/Header/HeaderTemplate';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import pizzaApi from './api/pizzaApi/api';

function App() {
    const [pizzasList, setPizzasList] = useState([]);
    useEffect(async () => {
        try {
            const response = await pizzaApi.getPizzasList();
            const { data: { pizzas: pizzasList } } = response;
            setPizzasList(pizzasList);
        } catch (e) {
            console.error(e)
        }
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
