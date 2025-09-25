import Card from "../Card";
import SidebarProfile from "../SidebarProfile/SidebarProfile";
import Button from "../Button";
import "./FollowSuggestions.css";

export default function FollowSuggestions({
  title = "You might like",
  className = "",
  suggestions = [],
}) {
  return (
    <Card cardTitle={title} className={className}>
      <div className="suggest-content">
        {suggestions.map((user, index) => (
          <div className="suggest-item" key={index}>
            <SidebarProfile
              className="suggest-profile"
              imageUrl={user.imageUrl}
              name={user.name}
              userName={user.userName}
            />
            <Button color={"white"} size={"medium"} text={"Follow"} />
          </div>
        ))}
      </div>
      <div className="suggest-expand">
        <button className="show-more">Show more</button>
      </div>
    </Card>
  );
}
