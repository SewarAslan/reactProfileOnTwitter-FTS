import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card";
import "./TrendsForYou.css";
export default function TrendsForYou() {
  const trends = [
    {
      category: "Gaming · Trending",
      hashtag: "#VALORANTChampions",
      posts: "27.6K posts",
    },
    {
      category: null,
      hashtag: "الأسماك",
      posts: "1,411 posts",
    },
    {
      category: "Gaming · Trending",
      hashtag: "Mako",
      posts: "14.9K posts",
    },
    {
      category: null,
      hashtag: "#الرسائل_اليوم",
      posts: "22.3K posts",
    },
    {
      category: null,
      hashtag: "#Messi𓃵",
      posts: "772K posts",
    },
    {
      category: null,
      hashtag: "#جامعه_طيبه",
      posts: "27.6K posts",
    },
    {
      category: null,
      hashtag: "أيوب",
      posts: "27.6K posts",
    },
    {
      category: "Gaming · Trending",
      hashtag: "fnatic",
      posts: "8,748 posts",
    },
    {
      category: null,
      hashtag: "#InterMiamiCF",
      posts: "68.4K posts",
    },
    {
      category: null,
      hashtag: "الإعلام المصري",
      posts: null,
    },
  ];

  return (
    <Card cardTitle="Trends for you">
      <div className="trend-content">
        {trends.map((trend, index) => (
          <div key={index} className="trend-item">
            <div style={{ flex: 1 }}>
              <div className="trend-category">{trend.category}</div>
              <div className="trend-hashtag">{trend.hashtag}</div>
              <div className="trend-posts">{trend.posts}</div>
            </div>

            <div className="trend-icon">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
        ))}
      </div>
      <div className="trends-expand">
        <button className="show-more">Show more</button>
      </div>
    </Card>
  );
}
