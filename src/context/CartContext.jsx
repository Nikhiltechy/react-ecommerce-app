import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const CartContext =
  createContext();

function CartProvider({
  children,
}) {

 const [cartItems,
setCartItems] =
useState(() => {

  const savedCart =
    localStorage.getItem(
      "cart"
    );

  return savedCart
    ? JSON.parse(savedCart)
    : [];
});

useEffect(() => {

  localStorage.setItem(
    "cart",
    JSON.stringify(
      cartItems
    )
  );

}, [cartItems]);

  const addToCart = (
  product
) => {

  setCartItems((prev) => {

    const existingProduct =
      prev.find(
        (item) =>
          item.id === product.id
      );

    // Product already exists
    if (existingProduct) {

      return prev.map((item) =>

        item.id === product.id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      );
    }

    // New product
    return [
      ...prev,
      {
        ...product,
        quantity: 1,
      },
    ];
  });
};

const increaseQuantity =
  (id) => {

  setCartItems((prev) =>
    prev.map((item) =>

      item.id === id
        ? {
            ...item,
            quantity:
              item.quantity + 1,
          }
        : item
    )
  );
};

const decreaseQuantity =
  (id) => {

  setCartItems((prev) =>

    prev
      .map((item) =>

        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity - 1,
            }
          : item
      )

      .filter(
        (item) =>
          item.quantity > 0
      )
  );
};

const removeItem =
  (id) => {

  setCartItems((prev) =>
    prev.filter(
      (item) =>
        item.id !== id
    )
  );
};
const totalPrice =
  cartItems.reduce(
    (total, item) =>

      total +
      item.price *
      item.quantity,

    0
  );

const totalCartItems =
  cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
  cartItems,
  addToCart,
  totalCartItems,

  increaseQuantity,
  decreaseQuantity,
  removeItem,
  totalPrice,
}}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

export const useCart =
  () => useContext(
    CartContext
  );