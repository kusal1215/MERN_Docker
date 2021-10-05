import React from "react";
import { Route, Switch , Link } from "react-router-dom";
import { CreateProduct } from "./CreateProduct";
import { EditProduct } from "./EditProduct";
import { ProductList } from "./ProductList";

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Products</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Products</Link>
          </li>
        </ul>
      </nav>


      <Switch>
        <Route exact path="/" component={ ProductList } />
        <Route exact path="/edit/:id" component={ EditProduct } />
        <Route exact path="/create" component={ CreateProduct } />
    </Switch>
    </div>

  );
}

export default App;
