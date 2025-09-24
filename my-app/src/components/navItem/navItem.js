import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navItem.css";
export default function NavItem({ name, icon }) {
  return (
    <li className="listItem">
      <FontAwesomeIcon icon={icon} className="itemIcon" />
      <h3 className="name">{name}</h3>
    </li>
  );
}
