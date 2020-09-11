import { GET_PRODUCT, ADD_CART, REMOVE_CART } from "./Type";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: payload.products.filter((product) =>
          product.discount > 0
            ? (product.price =
                product.price -
                Math.floor(
                  product.price / product.discount === 0 ? 0 : product.discount
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
        carts: state.carts.splice(payload, 1),
      };
    default:
      return state;
  }
};
