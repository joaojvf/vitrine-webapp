import React from 'react';
import { HashRouter } from "react-router-dom";

import Navbar from './components/Navbar';
import Routes from './routes';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Navbar/>
        <Routes/>
    </HashRouter>
    );
  }
}
export default App;
