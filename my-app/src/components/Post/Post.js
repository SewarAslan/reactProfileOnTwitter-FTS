import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faRetweet,
  faHeart,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

export default function Post({
  authorImage,
  authorName,
  authorHandle,
  time,
  content,
  likes,
}) {
  return (
    <div className="post">
      <img className="authorImage" src={authorImage} alt="Author" />
      <div className="postContent">
        <div className="authorInfo">
          <span className="authorName">{authorName}</span>
          <span className="authorHandle">@{authorHandle}</span>
          <span className="time">· {time}</span>
        </div>
        <p className="content">{content}</p>
        <div className="actions">
          <FontAwesomeIcon icon={faComment} className="icon" />
          <span>46</span>
          <FontAwesomeIcon icon={faRetweet} className="icon" />
          <span>675</span>
          <FontAwesomeIcon icon={faHeart} className="icon" />
          <span>3,701</span>
          <FontAwesomeIcon icon={faChartBar} className="icon" />
          <span>1.5M</span>
        </div>
      </div>
    </div>
  );
}
