import "./Card.css";
export default function Card({ cardTitle, children }) {
  return (
    <div className="card">
      <span className="cardTitle">{cardTitle}</span>
      {children}
    </div>
  );
}
