export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exisitingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  if (exisitingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, qunatity: cartItem.qunatity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, qunatity: 1 }];
};
