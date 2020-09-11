import { GET_PRODUCT } from "./Type";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: payload.products,
        data: payload,
      };
    default:
      return state;
  }
};
