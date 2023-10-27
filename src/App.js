import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);  // State for maintaining cart items

  const addPizzaToCart = (id, newPizza) => {     // Method for adding the customized pizza to the cart
    const pizzaInCart = cartItems.find((item) => item.id === id);  // Finding in the cart, if the pizza is already available
    if (pizzaInCart) {
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item   // If available, increase it's quantity
        )
      );
    } else {
      setCartItems((prevCart) => [...prevCart, { ...newPizza, quantity: 1 }]);  // If not available, add it to the cart
    }
  };
  
  const removeFromCart = (id) => {  // Method for removing pizza from cart
    setCartItems((prevCart) => {
      const updatedCart = prevCart.map((item) => item.id === id ? { ...item, quantity: item.quantity > 0? item.quantity - 1: 0} : item); // Decreasing it, if quantity more than 1
      return updatedCart.filter((item) => item.quantity > 0);  // Filtering if quantity is 0
    })
  }
  
  return (
    <>
    {/* Using Router for routing to different pages */}
      <Router>
        <Header />
        <Routes>
          {/* Route for displaying the Menu which has Pizzas listed */}
          <Route
            path="/"
            element={
              <Menu cartItems={cartItems} addPizzaToCart={addPizzaToCart} removeFromCart={removeFromCart} />
            }
          />
          {/* Route for displaying Cart items which has Pizzas added to the cart */}
          <Route exact path="/cart" element={<Cart cartItems={cartItems} addPizzaToCart={addPizzaToCart} removeFromCart={removeFromCart} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
