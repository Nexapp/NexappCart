import CartAPI from '../services/CartAPI';

export const FETCH_CART_REQUEST = 'cart/FETCH_CART_REQUEST';
export const FETCH_CART_SUCCESS = 'cart/FETCH_CART_SUCCESS';
export const FETCH_CART_FAILURE = 'cart/FETCH_CART_FAILURE';

export function fetchCart() {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: FETCH_CART_REQUEST });
      const cart = await CartAPI.fetchCart();

      dispatch({ type: FETCH_CART_SUCCESS, cart: cart });
    } catch (e) {
      dispatch({ type: FETCH_CART_FAILURE });
    }
  };
}
