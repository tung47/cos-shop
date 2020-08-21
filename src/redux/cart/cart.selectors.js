import { createSelector } from 'reselect';

const selcetCart = state => state.cart;

export const selectCartItems = createSelector(
  [selcetCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce(
      (accumalatedQuantity, cartItem) => 
        accumalatedQuantity + cartItem.quantity, 
        0
    )
);