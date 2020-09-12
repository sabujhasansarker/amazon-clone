import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// context
import Context from "./context/Context";

import NavBar from "./components/layout/NavBar";
import Products from "./components/products/Products";
import Checkouts from "./components/checkout/Checkouts";
import Alert from "./components/layout/Alert";

const App = () => {
  const { getData, msg } = useContext(Context);

  useEffect(() => {
    getData();
  }, []);
  console.log(msg);
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/checkout" component={Checkouts} />
        </Switch>
        {msg &&
          msg.map((m, index) => <Alert msg={m} index={index} key={m.id} />)}
      </div>
    </Router>
  );
};

export default App;
