import Card from "../Card";
import SidebarProfile from "../SidebarProfile/SidebarProfile";
import Button from "../Button";
import "./FollowSuggestions.css";
const suggestions = [
  {
    imageUrl: "https://play.tailwindcss.com/social-square.jpg",
    name: "Tailwind CSS",
    userName: "tailwindcss",
    verified: true,
  },
  {
    imageUrl:
      "https://www.dsebastien.net/content/images/2022/12/typescript-1.svg",
    name: "TypeScript",
    userName: "typescript",
    verified: false,
  },
  {
    imageUrl:
      "https://s3.amazonaws.com/freecodecamp/freecodecamp-square-logo-large.jpg",
    name: "freeCodeCamp.org",
    userName: "freeCodeCamp",
    verified: true,
  },
];

export default function FollowSuggestions() {
  return (
    <Card cardTitle="You might like">
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
