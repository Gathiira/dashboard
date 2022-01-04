import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";

function App() {
  return (
    <div >
      <Topbar />
      <div className="flex bg-gray-100">
        <Sidebar />
        <div className="flex-[4] md:flex-[6] bg-gray-200">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
