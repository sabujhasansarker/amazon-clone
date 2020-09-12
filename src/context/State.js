import React, { useReducer } from "react";
import Reducer from "./Reducer";
import Context from "./Context";
import {
  GET_PRODUCT,
  ADD_CART,
  REMOVE_CART,
  SET_MSG,
  REMOVE_MSG,
} from "./Type";

const State = ({ children }) => {
  const initialState = {
    data: null,
    products: [],
    carts: [],
    msg: [],
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

  const msgAlert = (msg, option) => {
    const id = Math.random();
    dispatch({
      type: SET_MSG,
      payload: { id, msg, option },
    });
    // setTimeout(() => {
    //   dispatch({
    //     type: REMOVE_MSG,
    //     payload: id,
    //   });
    // }, [2000]);
  };

  // add to cart
  const addCart = (data) => {
    dispatch({
      type: ADD_CART,
      payload: data,
    });
    msgAlert("Your item add in cart", "add");
  };

  // remove item
  const removeCart = (index) => {
    dispatch({
      type: REMOVE_CART,
      payload: index,
    });
    msgAlert("Your item remove in cart", "remove");
  };
  const { data, products, carts, msg } = state;
  return (
    <Context.Provider
      value={{ data, products, carts, msg, getData, addCart, removeCart }}
    >
      {children}
    </Context.Provider>
  );
};

export default State;
