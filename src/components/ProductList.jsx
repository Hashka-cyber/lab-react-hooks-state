import ProductCard from "./ProductCard";

export default function ProductList({ products, category, cartItems, addToCart }) {
  const filtered =
    category === "All" ? products : products.filter((p) => p.category === category);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: "12px",
        marginBottom: "32px",
      }}
    >
      {filtered.length === 0 ? (
        <p style={{ color: "#888", fontSize: "14px" }}>No products available</p>
      ) : (
        filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            inCart={!!cartItems.find((c) => c.id === product.id)}
            addToCart={addToCart}
          />
        ))
      )}
    </div>
  );
}