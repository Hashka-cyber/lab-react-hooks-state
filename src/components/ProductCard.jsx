export default function ProductCard({ product, inCart, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "14px",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      <span style={{ fontSize: "28px" }}>{product.emoji}</span>
      <p style={{ margin: 0, fontWeight: 500, fontSize: "14px" }}>{product.name}</p>
      <span
        style={{
          fontSize: "11px",
          textTransform: "uppercase",
          color: "#888",
          letterSpacing: "0.04em",
        }}
      >
        {product.category}
      </span>
      <span style={{ fontSize: "15px", fontWeight: 500 }}>{product.price}</span>
      <button
        data-testid={`product-${product.id}`}
        onClick={() => addToCart(product)}
        disabled={inCart}
        style={{
          marginTop: "auto",
          padding: "5px 10px",
          fontSize: "12px",
          borderRadius: "8px",
          border: inCart ? "1px solid #1D9E75" : "1px solid #aaa",
          color: inCart ? "#0F6E56" : "inherit",
          backgroundColor: "transparent",
          cursor: inCart ? "default" : "pointer",
        }}
      >
        {inCart ? "✓ Added" : "Add to cart"}
      </button>
    </div>
  );
}