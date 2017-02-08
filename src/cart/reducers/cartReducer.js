import { Record } from 'immutable';

import {
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE
} from '../actions/cartActions';

const CartState = new Record({
  items: [],
  fetching: false,
});

export default function reducer(state = new CartState(), action) {
  switch (action.type) {
    case FETCH_CART_REQUEST: {
      return state.set('fetching', true);
    }

    case FETCH_CART_SUCCESS: {
      return state.set('fetching', false)
                  .set('items', action.cart);
    }

    case FETCH_CART_FAILURE: {
      return state.set('fetching', false);
    }

    default:
      return state;
  }
}
