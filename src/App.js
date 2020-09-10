import React, { useEffect, useState } from "react";

// import data from "./jsonData.json";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Products from "./components/products/Products";

const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("./jsonData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  }, []);
  return (
    <Router>
      <NavBar logo={data && data.logo} cart={data && data.cart} />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Products products={data && data.products} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
