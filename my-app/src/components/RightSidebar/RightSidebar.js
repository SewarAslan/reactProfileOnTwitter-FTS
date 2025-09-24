import SearchInput from "../SearchInput";
import "./RightSidebar.css";
import FollowSuggestions from "../FollowSuggestions";
import TrendsForYou from "../TrendsForYou";
export default function RightSidebar() {
  return (
    <div className="rightSidebar">
      <SearchInput />
      <FollowSuggestions />
      <TrendsForYou />
    </div>
  );
}
