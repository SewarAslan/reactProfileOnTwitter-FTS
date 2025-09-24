import "./MainContent.css";
import ProfileHeader from "../ProfileHeader";
import ProfileTabs from "../ProfileTabs";
import Post from "../Post";
import FollowSuggestions from "../FollowSuggestions";

export default function MainContent() {
  return (
    <div className="mainContent">
      <ProfileHeader />
      <ProfileTabs />
      <Post
        authorImage="https://pbs.twimg.com/profile_images/1234567890/author.jpg" // Replace with actual from screenshot
        authorName="Gabriel Vasconcelos"
        authorHandle="gvasconcelos"
        time="May 29"
        content="Happy 10th birthday to @reactjs! 🎉"
        likes="3,701"
      />
      <FollowSuggestions title="Who to follow" className="main" />
    </div>
  );
}
