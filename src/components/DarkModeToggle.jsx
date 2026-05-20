export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      aria-pressed={darkMode}
      style={{
        padding: "7px 16px",
        fontSize: "13px",
        borderRadius: "8px",
        border: "1px solid #aaa",
        cursor: "pointer",
        backgroundColor: darkMode ? "#333" : "#f0f0f0",
        color: darkMode ? "#e8e8e8" : "#1a1a1a",
      }}
    >
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
}