import "./SidebarProfile.css";
export default function SidebarProfile({
  imageUrl,
  name,
  userName,
  className,
}) {
  return (
    <div className={`sidebarProfile ${className}`}>

      <img className="userImage" src={imageUrl} alt="profilePicture" />
      <div className="information">
        <span className="name-profile">{name}</span>
        <span className="userName-profile">@{userName}</span>
      </div>
    </div>
  );
}
