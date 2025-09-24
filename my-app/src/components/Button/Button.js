import "./Button.css";

export default function Button({ color, text, size }) {
  const sizeStyle = {
    small: {
      padding: "4px 10px",
      fontSize: "12px",
    },
    medium: {
      padding: "6px 16px",
      fontSize: "15px",
    },
    large: {
      padding: "10px 100px",
      fontSize: "16px",
    },
  };
  const colorStyle = {
    blue: {
      backgroundColor: "#1d9bf0ff",
      color: "white",
    },
    black: {
      backgroundColor: "black",
      color: "white",
    },
    white: {
      backgroundColor: "white",
      color: "black",
      border: "1px solid #ccc",
    },
  };

  return (
    <button
      className="Button"

      style={{
        ...sizeStyle[size],
        ...colorStyle[color],
      }}
    >
      {text}
    </button>
  );
}
