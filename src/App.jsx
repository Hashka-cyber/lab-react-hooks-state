import { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

export const sampleProducts = [
  { id: 1,  name: "Milk",         category: "Dairy",     price: "$2.49", emoji: "🥛" },
  { id: 2,  name: "Bread",        category: "Bakery",    price: "$3.19", emoji: "🍞" },
  { id: 3,  name: "Eggs",         category: "Dairy",     price: "$4.99", emoji: "🥚" },
  { id: 4,  name: "Butter",       category: "Dairy",     price: "$3.79", emoji: "🧈" },
  { id: 5,  name: "Banana",       category: "Fruits",    price: "$1.29", emoji: "🍌" },
  { id: 6,  name: "Apple",        category: "Fruits",    price: "$2.99", emoji: "🍎" },
  { id: 7,  name: "Pasta",        category: "Pantry",    price: "$1.89", emoji: "🍝" },
  { id: 8,  name: "Olive Oil",    category: "Pantry",    price: "$7.49", emoji: "🫙" },
  { id: 9,  name: "Coffee",       category: "Beverages", price: "$8.99", emoji: "☕" },
  { id: 10, name: "Orange Juice", category: "Beverages", price: "$4.49", emoji: "🍊" },
];

export default function App() {
  const [darkMode, setDarkMode]   = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory]   = useState("All");

  const addToCart = (product) => {
    setCartItems((prev) =>
      prev.find((p) => p.id === product.id) ? prev : [...prev, product]
    );
  };

  return (
    <div
      data-testid="app"
      style={{
        minHeight: "100vh",
        backgroundColor: darkMode ? "#1a1a1a" : "#ffffff",
        color: darkMode ? "#e8e8e8" : "#1a1a1a",
        fontFamily: "sans-serif",
        padding: "24px",
        transition: "background-color 0.2s, color 0.2s",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "24px",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 500 }}>
          ShopDash
        </h1>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>

      <main>
        <label htmlFor="category-filter" style={{ marginRight: "8px", fontSize: "14px" }}>
          Filter by category:
        </label>
        <select
          id="category-filter"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ marginBottom: "20px", padding: "6px 10px", fontSize: "14px" }}
        >
          <option value="All">All</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Fruits">Fruits</option>
          <option value="Pantry">Pantry</option>
          <option value="Beverages">Beverages</option>
        </select>

        <ProductList
          products={sampleProducts}
          category={category}
          cartItems={cartItems}
          addToCart={addToCart}
        />

        <Cart cartItems={cartItems} />
      </main>
    </div>
  );
}