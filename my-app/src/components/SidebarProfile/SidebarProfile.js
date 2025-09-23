import "./SidebarProfile.css";
export default function SidebarProfile({ imageUrl, name, userName }) {
  return (
    <div className="sidebarProfile">
      <img className="userImage" src={imageUrl} alt="profilePicture" />
      <div className="information">
        <span className="name-profile">{name}</span>
        <span className="userName-profile">@{userName}</span>
      </div>
    </div>
  );
}
