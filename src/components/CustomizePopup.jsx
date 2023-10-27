import React, { useState } from "react";

const CustomizePopup = ({ pizza, addPizzaToCart, onClose }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleSizeChange = (event) => {  // Handling change in size
    setSelectedSize(event.target.value);
  };

  const handleToppingChange = (event) => {  // Handling change in toppings
    const topping = event.target.value;
    const idx = selectedToppings.indexOf(topping);
    if (idx === -1) {
      setSelectedToppings([...selectedToppings, topping]);
    } else {
      selectedToppings.splice(idx, 1);
      setSelectedToppings([...selectedToppings]);
    }
  };
  
  const handleSubmit = (event) => {  // Adding selected size and toppings to the pizza
    event.preventDefault();
    const customizedPizza = {
      ...pizza,
      selectedSize: selectedSize,
      selectedToppings: selectedToppings,
    };
    addPizzaToCart(pizza.id, customizedPizza);  // Adding customized pizza to the cart items
    onClose();  // Closing the pop-up
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-6 space-x-4">
          <h3 className="text-xl font-bold">{`Customize "${pizza.name}"`}</h3>
          {/* Close button */}
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div>
          {/* Form for accepting size and toppings */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="font-bold mb-2 block">
                {pizza.size[0].title}
              </label>
              <div className="flex flex-wrap gap-2">
                {pizza.size[0].items.map((sizeOption) => (
                  <div key={sizeOption.size}>
                    <input
                      type={pizza.size[0].isRadio ? "radio" : "checkbox"}
                      name="size"
                      value={sizeOption.size}
                      checked={selectedSize === sizeOption.size}
                      onChange={handleSizeChange}
                      id={`size-${sizeOption.size}`}
                    />
                    <label
                      htmlFor={`size-${sizeOption.size}`}
                      className={"px-4 py-2 cursor-pointer"}
                    >
                      {sizeOption.size}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="font-bold mb-2 block">
                {pizza.toppings[0].title}
              </label>
              <div className="flex flex-col">
                {pizza.toppings[0].items.map((toppingOption) => (
                  <div key={toppingOption.name}>
                    <input
                      type={pizza.toppings[0].isRadio ? "radio" : "checkbox"}
                      name="toppings"
                      value={toppingOption.name}
                      checked={selectedToppings.includes(toppingOption.name)}
                      onChange={handleToppingChange}
                      id={`topping-${toppingOption.name}`}
                    />
                    <label
                      htmlFor={`topping-${toppingOption.name}`}
                      className="px-4 py-2 cursor-pointer"
                    >
                      {toppingOption.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {/* Button for adding item to the cart */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Add to Cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomizePopup;
