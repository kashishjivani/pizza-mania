import React from "react";
import PizzaCard from "./PizzaCard";

const Cart = ({ cartItems, addPizzaToCart, removeFromCart }) => {
  return (
    <div className="p-5 h-96 mb-10">
      {cartItems.length > 0 ? (
        cartItems?.map((pizza) =>
          pizza.quantity > 0 ? (
            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              cartItems={cartItems}
              addPizzaToCart={addPizzaToCart}
              removeFromCart={removeFromCart}
            />
          ) : 
          (
            <></>
          )
        )
      ) : (
        <div className="font-bold h-96">Cart is Empty!</div>
      )}
    </div>
  );
};

export default Cart;
