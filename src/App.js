import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";

function App() {
  return (
    <div >
      <Topbar />
      <div className="flex gap-1">
        <Sidebar />
        <div className="flex-[4] md:flex-[6]">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
