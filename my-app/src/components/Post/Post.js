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
  comments = 0,
  retweets = 0,
  likes = 0,
  views = 0,
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
          <div>
            <FontAwesomeIcon icon={faComment} className="icon" />
            <span>{comments}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faRetweet} className="icon" />
            <span>{retweets}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faHeart} className="icon" />
            <span>{likes}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} className="icon" />
            <span>{likes}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faChartBar} className="icon" />
            <span>{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
