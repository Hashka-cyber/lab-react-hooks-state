export default function Cart({ cartItems }) {
  return (
    <section aria-label="Shopping cart">
      <h2 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "12px" }}>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p style={{ fontSize: "13px", color: "#888" }}>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
          {cartItems.map((item) => (
            <li
              key={item.id}
              style={{
                padding: "10px 14px",
                borderRadius: "8px",
                backgroundColor: "rgba(128,128,128,0.1)",
                fontSize: "13px",
              }}
            >
              {item.emoji} {item.name} is in your cart.
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}