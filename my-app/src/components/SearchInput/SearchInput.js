import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./SearchInput.css";
export default function SearchInput() {
  return (
    <div className="search-container">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      <input type="text" placeholder="Search" className="search-input" />
    </div>
  );
}
