import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// context
import Context from "./context/Context";

import NavBar from "./components/layout/NavBar";
import Products from "./components/products/Products";
import Checkouts from "./components/checkout/Checkouts";
import Alert from "./components/layout/Alert";
import Login from "./components/auth/Login";
import Payment from "./components/checkout/Payment";

const App = () => {
  const { getData, msg } = useContext(Context);

  useEffect(() => {
    getData();
  }, []);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/checkout" component={Checkouts} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/login" component={Login} />
      </Switch>
      {msg && msg.map((m, index) => <Alert msg={m} index={index} key={m.id} />)}
    </Router>
  );
};

export default App;
