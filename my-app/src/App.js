import "./App.css";
import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";
import { useState, useEffect } from "react";
function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
      <MainContent />
      {showRightSidebar && <RightSidebar />}
    </div>
  );
}

export default App;
