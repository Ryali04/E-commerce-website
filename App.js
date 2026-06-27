import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import products from "./Products";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist.quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="App">
      <h1>E-Commerce Shopping Website</h1>

      <ProductList
        products={products}
        addToCart={addToCart}
      />

      <Cart
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;