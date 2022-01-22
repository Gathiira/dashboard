import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";

function App() {
  return (
    <Router>
      <Routes >
        <Topbar />
        <div className="flex bg-gray-100">
          <Sidebar />
          <div className="flex-[4] md:flex-[6] bg-gray-200">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
            </Routes>
          </div>
        </div>
      </Routes>
    </Router>
  );
}

export default App;
