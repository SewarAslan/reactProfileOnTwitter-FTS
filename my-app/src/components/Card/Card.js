import "./Card.css";
export default function Card({ cardTitle, children, className = "" }) {
  return (
    <div className={`card ${className}`}>
      <span className="cardTitle">{cardTitle}</span>
      {children}
    </div>
  );
}
