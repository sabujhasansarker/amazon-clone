import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Products from "./components/products/Products";

// context
import Context from "./context/Context";

const App = () => {
  const { getData, products, data } = useContext(Context);

  useEffect(() => {
    getData();
  }, []);
  return (
    <Router>
      <NavBar logo={data && data.logo} cart={data && data.cart} />
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Products products={products && products} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
