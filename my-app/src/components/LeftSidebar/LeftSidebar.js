import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faList,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBell as farBell,
  faEnvelope as farEnvelope,
  faBookmark as farBookmark,
  faUser as farUser,
} from "@fortawesome/free-regular-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import "./LeftSidebar.css";
import Button from "../Button";
import NavList from "../navList";
import SidebarProfile from "../SidebarProfile";

export default function LeftSidebar({ isCollapsed }) {
  const navItems = [
    { name: "Home", icon: faHouse },
    { name: "Explore", icon: faMagnifyingGlass },
    { name: "Notifications", icon: farBell },
    { name: "Messages", icon: farEnvelope },
    { name: "Lists", icon: faList },
    { name: "Bookmarks", icon: farBookmark },
    { name: "Profile", icon: farUser },
    { name: "More", icon: faEllipsis },
  ];

  return (
    <div className={`leftSidebar ${isCollapsed ? "collapsed" : ""}`}>
      <FontAwesomeIcon icon={faXTwitter} className="brandIcon" />
      <NavList items={navItems} />
      <Button
        color={"blue"}
        text={"Post"}
        size={isCollapsed ? "small" : "large"}
      />
      <SidebarProfile
        imageUrl={"/sewarProfile.png"}
        name={"Sewar Aslan"}
        userName={"seewarkoo"}
      />
    </div>
  );
}
