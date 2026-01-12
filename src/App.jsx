import { useState } from "react";
import Home from "./components/Home";
import Admin from "./components/Admin";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2999,
      image: "/images/helmet-img.webp"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 4999,
      image: "/images/helmet-img.webp"
    }
  ]);

  return (
    <div className="app">
      <header className="navbar">
        <h1>Mini E-Commerce</h1>

        <div className="nav-buttons">
          <button
            className={!isAdmin ? "active" : ""}
            onClick={() => setIsAdmin(false)}
          >
            User
          </button>
          <button
            className={isAdmin ? "active" : ""}
            onClick={() => setIsAdmin(true)}
          >
            Admin
          </button>
        </div>
      </header>

      {isAdmin ? (
        <Admin products={products} setProducts={setProducts} />
      ) : (
        <Home products={products} />
      )}
    </div>
  );
}

export default App;
