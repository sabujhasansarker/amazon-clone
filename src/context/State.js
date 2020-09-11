import React, { useReducer } from "react";
import Reducer from "./Reducer";
import Context from "./Context";
import { GET_PRODUCT } from "./Type";

const State = ({ children }) => {
  const initialState = {
    data: null,
    products: [],
  };
  const [state, dispatch] = useReducer(Reducer, initialState);
  const getData = () => {
    fetch("./jsonData.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: GET_PRODUCT,
          payload: data,
        });
      });
  };
  const { data, products } = state;
  return (
    <Context.Provider value={{ data, products, getData }}>
      {children}
    </Context.Provider>
  );
};

export default State;
