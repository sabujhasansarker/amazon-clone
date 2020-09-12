import {
  GET_PRODUCT,
  ADD_CART,
  REMOVE_CART,
  SET_MSG,
  REMOVE_MSG,
} from "./Type";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: payload.products.filter((product) =>
          product.discount > 0
            ? (product.price = Number(
                (product.price - product.price / product.discount).toFixed(2)
              ))
            : product
        ),
        data: payload,
      };
    case ADD_CART:
      return {
        ...state,
        carts: [...state.carts, payload],
      };
    case REMOVE_CART:
      return {
        ...state,
        carts: state.carts.filter((cart, index) => index !== payload),
      };
    case SET_MSG:
      return {
        ...state,
        msg: [...state.msg, payload],
      };
    case REMOVE_MSG:
      return {
        ...state,
        msg: state.msg.filter((m) => m.id !== payload),
      };
    default:
      return state;
  }
};
