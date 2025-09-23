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
export default function LeftSidebar() {
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
    <div className="leftSidebar ">
      <FontAwesomeIcon icon={faXTwitter} className="brandIcon" />
      <NavList items={navItems} />
      <Button color={"blue"} text={"Post"} size={"large"}></Button>
      <SidebarProfile
        imageUrl={"/sewarProfile.png"}
        name={"Sewar Aslan"}
        userName={"seewarkoo"}
      />
    </div>
  );
}
