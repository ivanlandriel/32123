import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Catalogo from './components/Catalogo';
import DetalleProducto from './components/DetalleProducto';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Catalogo} />
          <Route path="/producto/:id" component={DetalleProducto} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
