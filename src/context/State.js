import React, { useReducer } from "react";
import Reducer from "./Reducer";
import Context from "./Context";
import { GET_PRODUCT, ADD_CART, REMOVE_CART } from "./Type";

const State = ({ children }) => {
  const initialState = {
    data: null,
    products: [],
    carts: [],
  };
  const [state, dispatch] = useReducer(Reducer, initialState);

  // get data
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

  // add to cart
  const addCart = (data) => {
    dispatch({
      type: ADD_CART,
      payload: data,
    });
  };

  // remove item
  const removeCart = (index) => {
    dispatch({
      type: REMOVE_CART,
      payload: index,
    });
    // console.log(index);
  };
  const { data, products, carts } = state;
  return (
    <Context.Provider
      value={{ data, products, carts, getData, addCart, removeCart }}
    >
      {children}
    </Context.Provider>
  );
};

export default State;
