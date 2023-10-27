import React, { useState } from "react";
import CustomizePopup from "./CustomizePopup";

const PizzaCard = ({ pizza, cartItems, addPizzaToCart, removeFromCart }) => {
  const [showCustomizePopup, setShowCustomizePopup] = useState(false);
  const symbol = "⭐️";

  const starRating = (  // For displaying stars corresponding to the rating
    <>
      {[...Array(Math.round(pizza.rating))].map((_, i) => (
        <span key={i}>{symbol}</span>
      ))}
    </>
  );

  const handleAdd = () => {  // Adding more items to the cart if already added once, else opening pop-up for selecting size and toppings for the first time
    if(cartItems?.find(item => item.id === pizza.id)?.quantity >0) addPizzaToCart(pizza.id)
    else setShowCustomizePopup(true);
  };

  const handleClose = () => {  // Handling close of the pop-up
    setShowCustomizePopup(false);
  };

  const handleDecreaseQuantity = () => { // Handling decreasing of the quantity if there is any in the cart already
    if(cartItems?.find(item => item.id === pizza.id)?.quantity >0) removeFromCart(pizza.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 flex flex-row justify-between">
      <div>
        {/* Displaying Pizza details */}
        <h2 className="text-lg font-bold">{pizza.name}</h2>
        <p className="text-grey-600">{pizza.description}</p>
        <div className="flex justify-start space-x-6 items-center mt-4">
          <div>
            {starRating}
            <span className="ml-2">{pizza.rating}</span>
          </div>
          <div className="font-bold text-black">₹{pizza.price}</div>
        </div>
        {/* Displaying selected size and toppings in cart */}
        <div className="flex flex-col pt-2">
          <div>
            <span className="font-medium">{pizza?.selectedSize} </span>
          </div>
          <div>
            {pizza?.selectedToppings?.map((topping) => (<span key={topping} className="font-medium"> {topping} </span>))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src={pizza.img_url}
          alt={pizza.name}
          className="w-40 rounded-lg mb-4"
        />
        {/* Buttons for adding and removing/decreasing quantity */}
        <div className="flex items-center">
          <button
            className="bg-red-400 text-white px-4 py-2 rounded-l-md cursor-pointer hover:bg-red-600 focus:outline-none"
            onClick={() => handleDecreaseQuantity()}
          >
            <svg
              className="h-4 w-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 10h6a.5.5 0 010 1H7a.5.5 0 010-1z" />
            </svg>
          </button>
          <span className="bg-gray-200 px-4 py-1 text-black-500 font-semibold w-10 text-center h-8">
            {cartItems?.find(item => item.id === pizza.id)?.quantity || 0 || pizza.quantity}
          </span>
          <button
            className="bg-green-400 text-white px-4 py-2 rounded-r-md cursor-pointer hover:bg-green-600 focus:outline-none"
            onClick={() => handleAdd()}
          >
            <svg
              className="h-4 w-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 7V3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v4h4a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-4v4a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-4H6a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h4z" />
            </svg>
          </button>
        </div>
      </div>
      {/* Rendering Pop-up for pizza customization */}
      {showCustomizePopup && (
        <CustomizePopup pizza={pizza} addPizzaToCart={addPizzaToCart} onClose={handleClose} />
      )}
    </div>
  );
};

export default PizzaCard;
