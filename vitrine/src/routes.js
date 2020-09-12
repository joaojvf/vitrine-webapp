import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Provider } from "react-redux";

import Home from './pages/Home';
import CadastroProduto from './pages/CadastroProduto';

export default () => {
    return (
        <Switch>
            <Route
            exact
            path="/"
            component={Home}
            />
             <Route
            exact
            path="/cadastro-produto"
            component={CadastroProduto}
            />
        </Switch>
    );
};