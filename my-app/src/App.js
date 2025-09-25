import "./App.css";
import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";
import { useState, useEffect } from "react";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [suggestionData] = useState([
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
  ]);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isCollapsed = screenWidth < 1200;
  let showRightSidebar = true;
  let gridTemplateColumns = "275px auto 350px";
  if (screenWidth < 1200) {
    gridTemplateColumns = "72px auto 350px";
  }
  if (screenWidth < 1000) {
    gridTemplateColumns = "72px auto";
    showRightSidebar = false;
  }

  return (
    <div className="App" style={{ gridTemplateColumns }}>
      <LeftSidebar isCollapsed={isCollapsed} />
      <MainContent suggestions={suggestionData} />
      {showRightSidebar && <RightSidebar suggestions={suggestionData} />}
    </div>
  );
}

export default App;
