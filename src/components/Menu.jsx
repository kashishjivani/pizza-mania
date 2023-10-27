import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import PizzaCard from "./PizzaCard";
import Loader from "./Loader";

const Menu = ({ cartItems, addPizzaToCart, removeFromCart }) => {
  const [fetchedPizzaList, setFetchedPizzaList] = useState(null); // State for storing the response from API
  const [isVeg, setIsVeg] = useState(true);
  const [sortBy, setSortBy] = useState("rating");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Calling the API on first render of the page
    async function fetchList() {
      const apiUrl = "https://mocki.io/v1/f23e6a1e-d15a-4029-89ab-838b9f09a088";
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const pizzaListWithQuantityField = data.map((pizza) => ({  // Adding a quantity field to manipulate it further
          ...pizza,
          quantity: 0,
        }));
        setFetchedPizzaList(pizzaListWithQuantityField);
        setIsLoading(false);   // To stop loading once response is recieved
      } catch (error) {
        console.log(error);
      }
    }

    fetchList(); // Calling the fetchList function
  }, []);

  const filteredList = isVeg  // Filtering on basis of Veg and Non Veg
    ? fetchedPizzaList?.filter((pizza) => pizza.isVeg)
    : fetchedPizzaList?.filter((pizza) => !pizza.isVeg);

  const toggleIsVeg = () => {  // Toggling between Veg and Non Veg
    setIsVeg(!isVeg);
  };

  const sortedList = filteredList?.sort((a, b) => {  // Sorting based on Price and Rating
    if (sortBy === "rating") {
      return b.rating - a.rating;
    } else {
      return a.price - b.price;
    }
  });

  const toggleSort = (val) => {  // Toggling between Price and Rating
    setSortBy(val);
  };

  return (
    <>
    {/* Rendering Filter Component which has two filters */}
      <Filter
        isVeg={isVeg}
        toggleIsVeg={toggleIsVeg}
        sortBy={sortBy}
        toggleSort={toggleSort}
      />
    {/* Rendering Loader until response is recieved. Once recieved displaying the list containing pizzas */}
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <main className="flex-1 p-4">
            <div className="flex flex-col">
              {sortedList?.map((pizza) => (
                <PizzaCard
                  key={pizza.id}
                  pizza={pizza}
                  cartItems={cartItems}
                  addPizzaToCart={addPizzaToCart}
                  removeFromCart={removeFromCart}
                />
              ))}
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Menu;
