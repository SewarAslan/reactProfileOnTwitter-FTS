import "./Button.css";

export default function Button({ color, text, size }) {
  const buttonClasses = `Button Button--${size} Button--${color}`;

  return <button className={buttonClasses}>{text}</button>;
}
