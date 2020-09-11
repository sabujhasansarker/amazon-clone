import { GET_PRODUCT, ADD_CART } from "./Type";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: payload.products,
        data: payload,
      };
    case ADD_CART:
      return {
        ...state,
        carts: [...state.carts, payload],
      };
    default:
      return state;
  }
};
