import React from "react";
import PizzaCard from "./PizzaCard";

const Cart = ({ cartItems, addPizzaToCart, removeFromCart }) => {
  return (
    <div className="p-5 min-h-screen mb-10">
      {/* Rendering items in cart with selected size, toppings and quantity. Can also add and remove items from here. */}
      {cartItems.length > 0 ? (
        cartItems?.map((pizza) =>
          (
            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              cartItems={cartItems}
              addPizzaToCart={addPizzaToCart}
              removeFromCart={removeFromCart}
            />
          )
        )
      ) : (
        // When no item is selected
        <div className="font-bold h-96">Cart is Empty!</div>
      )}
    </div>
  );
};

export default Cart;
