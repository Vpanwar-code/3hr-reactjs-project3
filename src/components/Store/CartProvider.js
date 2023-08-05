import { useState, useEffect } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let amount = 0;
    items.forEach((item) => {
      amount += item.price * item.quantity;
    });
    setTotalAmount(amount);
  }, [items]);

  const addItemHandler = (item, quantity) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (prevItem) => prevItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((prevItem) =>
          prevItem.id === item.id
            ? { ...prevItem, quantity: prevItem.quantity + quantity }
            : prevItem
        );
      }
      return [...prevItems, { ...item, quantity: quantity }];
    });
  };

  const clearCartHandler = () => {
    setItems([]);
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
