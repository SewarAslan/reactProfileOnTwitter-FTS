import "./ProfileHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faBell,
  faCalendarAlt,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import { faBlackTie } from "@fortawesome/free-brands-svg-icons";

export default function ProfileHeader({
  profileImage,
  name,
  handle,
  description,
  joinDate,
  followers,
  following,
  isFollowing = false,
}) {
  return (
    <div className="profileHeader">
      <div className="banner"></div>
      <div className="topNav">
        <button className="backButton">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
      <div className="profileInfo">
        <img
          className="profileImage"
          src={profileImage}
          alt={`${name} profile`}
        />
        <div className="headerActions">
          <Button
            text={<FontAwesomeIcon icon={faEllipsis} />}
            color="black"
            size="small"
          ></Button>
          <Button
            text={<FontAwesomeIcon icon={faBell} />}
            color="black"
            size="small"
          ></Button>
          <Button
            color="black"
            text={isFollowing ? "Following" : "Follow"}
            size="medium"
          />
        </div>
        <div className="details">
          <h1 className="name">{name}</h1>
          <span className="handle">@{handle}</span>
          <p className="description">{description}</p>
          <div className="stats">
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            <span>Joined {joinDate}</span>
          </div>
          <div className="followers">
            <span>
              <strong>{followers}</strong> Followers
            </span>
            <span>
              <strong>{following}</strong> Following
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
