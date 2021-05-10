import React, { useEffect, useState} from 'react';

import HeaderTemplate  from './components/Header/HeaderTemplate';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
        <HeaderTemplate />
      <div className="content">
        <Route path="/" render={() => <Home />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
