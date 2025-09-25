import "./ProfileTabs.css";

export default function ProfileTabs() {
  const tabs = ["Posts", "Replies", "Media", "Likes"];

  return (
    <div className="profileTabs">
      {tabs.map((tab, index) => (
        <button key={index} className={`tab ${index === 0 ? "active" : ""}`}>
          {tab}
        </button>
      ))}
    </div>
  );
}
