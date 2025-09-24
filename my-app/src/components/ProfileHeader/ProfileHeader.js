import "./ProfileHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

export default function ProfileHeader() {
  return (
    <div className="profileHeader">
      <div className="banner"></div>

      <div className="profileInfo">
        <img
          className="profileImage"
          src="https://images.icon-icons.com/2108/PNG/512/react_icon_130845.png"
          alt="React profile"
        />
        <div className="details">
          <h1 className="name">React</h1>
          <span className="handle">@reactjs</span>
          <p className="description">
            The library for web and native user interfaces
          </p>
          <div className="stats">
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            <span>Joined July 2013</span>
          </div>
          <div className="followers">
            <span>
              <strong>708.1K</strong> Followers
            </span>
            <span>
              <strong>708</strong> Following
            </span>
          </div>
          <Button color="white" text="Following" size="medium" />
        </div>
      </div>
    </div>
  );
}
