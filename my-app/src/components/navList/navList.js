import NavItem from "../navItem";
import "./navList.css";
export default function NavList({ items }) {
  return (
    <ul className="navItemList">
      {items.map((item, index) => {
        return (
          <NavItem key={index} name={item.name} icon={item.icon}></NavItem>
        );
      })}
    </ul>
  );
}
