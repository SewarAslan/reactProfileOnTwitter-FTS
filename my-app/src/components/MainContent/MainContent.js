import "./MainContent.css";
import { useState } from "react";
import ProfileHeader from "../ProfileHeader";
import ProfileTabs from "../ProfileTabs";
import Post from "../Post";
import FollowSuggestions from "../FollowSuggestions";

export default function MainContent({ suggestions }) {
  const [profileData] = useState({
    profileImage:
      "https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d.png",
    name: "React",
    handle: "reactjs",
    description: "The library for web and native user interfaces",
    joinDate: "July 2013",
    followers: "708.1K",
    following: "708",
    isFollowing: true,
  });

  const [posts] = useState([
    {
      authorImage: "https://pbs.twimg.com/profile_images/1234567890/author.jpg", // Replace with actual
      authorName: "Gabriel Vasconcelos",
      authorHandle: "gvasconcelos",
      time: "May 29",
      content: "Happy 10th birthday to @reactjs! 🎉",
      comments: 46,
      retweets: 675,
      likes: 3701,
      views: "1.5M",
    },
    {
      authorImage:
        "https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d.png",
      authorName: "React",
      authorHandle: "reactjs",
      time: "Jun 6",
      content:
        "The in-person ticket lottery drawings begin today. Sign up for a chance to purchase tickets to attend React Conf in person: https://forms.reform.app/react-conf/ticket-lottery/piaae1",
      comments: 2,
      retweets: 1,
      likes: 39,
      views: "28893",
    },
    {
      authorImage:
        "https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d.png",
      authorName: "React",
      authorHandle: "reactjs",
      time: "Jun 6",
      content:
        "We're thrilled to announce that @sethwebster @shrutikapoor08 @en_JS @zmofei @lydiahallie @jherr  @lunaleaps will be speaking at React Conf 2025!",
      comments: 25,
      retweets: 46,
      likes: 459,
      views: "63925",
    },
    {
      authorImage:
        "https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d.png",
      authorName: "React",
      authorHandle: "reactjs",
      time: "Apr 23",
      content:
        "Finally, we’re looking for speakers to help us create talks about the features covered in this post. If you’re interested in speaking at ReactConf, please apply here (no talk proposal required): https://forms.reform.app/react-conf/call-for-speakers/piaae1",
      comments: 8,
      retweets: 6,
      likes: 58,
      views: "26298",
    },
    {
      authorImage:
        "https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d.png",
      authorName: "React",
      authorHandle: "reactjs",
      time: "Apr 23",
      content:
        "Check out the post for a list of what we’re working on: https://react.dev/blog/2025/04/23/react-labs-view-transitions-activity-and-more#features-in-development",
      comments: 2,
      retweets: 5,
      likes: 60,
      views: "26850",
    },
    {
      authorImage:
        "https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d.png",
      authorName: "React",
      authorHandle: "reactjs",
      time: "Apr 23",
      content:
        "When new features are ready to try in the experimental release, we’ll announce them on the blog with docs included, similar to what we’re doing with View Transitions and Activity today. Before then, you can follow along, but let us cook.",
      comments: 1,
      retweets: 0,
      likes: 29,
      views: "2862",
    },
  ]);

  return (
    <div className="mainContent">
      <ProfileHeader
        profileImage={profileData.profileImage}
        name={profileData.name}
        handle={profileData.handle}
        description={profileData.description}
        joinDate={profileData.joinDate}
        followers={profileData.followers}
        following={profileData.following}
        isFollowing={profileData.isFollowing}
      />
      <ProfileTabs />
      <Post
        authorImage={posts[0].authorImage}
        authorName={posts[0].authorName}
        authorHandle={posts[0].authorHandle}
        time={posts[0].time}
        content={posts[0].content}
        comments={posts[0].comments}
        retweets={posts[0].retweets}
        likes={posts[0].likes}
        views={posts[0].views}
      />
      <FollowSuggestions
        title="Who to follow"
        className="main"
        suggestions={suggestions}
      />
      {posts.slice(1).map((post, index) => (
        <Post
          key={index}
          authorImage={post.authorImage}
          authorName={post.authorName}
          authorHandle={post.authorHandle}
          time={post.time}
          content={post.content}
          comments={post.comments}
          retweets={post.retweets}
          likes={post.likes}
          views={post.views}
        />
      ))}
    </div>
  );
}
