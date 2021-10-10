import React from "react";
import { Route, Switch , Link } from "react-router-dom";
import { CreateProduct } from "./CreateProduct";
import { EditProduct } from "./EditProduct";
import { ProductList } from "./ProductList";

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light p-3">
        <ul className="container navbar-nav mr-auto">
          <li className="navbar-item text-center">
            <Link to="/product-list" className="btn btn-success">Product List</Link>
          </li>
          <h3>STORE</h3>
          <li className="navbar-item">
            <Link to="/" className="btn btn-secondary">Create Products</Link>
          </li>
        </ul>
      </nav>


      <Switch>
        <Route exact path="/" component={ CreateProduct } />
        <Route exact path="/product-list" component={ ProductList } />
        <Route exact path="/edit/:id" component={ EditProduct } />
        
    </Switch>
    </div>

  );
}

export default App;
