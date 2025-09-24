import SearchInput from "../SearchInput";
import "./RightSidebar.css";
import FollowSuggestions from "../FollowSuggestions";
export default function RightSidebar() {
  return (
    <div className="rightSidebar">
      <SearchInput />
      <FollowSuggestions />
    </div>
  );
}
