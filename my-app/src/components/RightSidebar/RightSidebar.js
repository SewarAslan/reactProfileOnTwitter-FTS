import SearchInput from "../SearchInput";
import "./RightSidebar.css";
import FollowSuggestions from "../FollowSuggestions";
import TrendsForYou from "../TrendsForYou";
import SidebarFooter from "../SidebarFooter/SidebarFooter";

export default function RightSidebar({ suggestions = [] }) {
  return (
    <div className="rightSidebar">
      <SearchInput />
      <FollowSuggestions
        title="You might like"
        className=""
        suggestions={suggestions}
      />
      <TrendsForYou />
      <SidebarFooter />
    </div>
  );
}
