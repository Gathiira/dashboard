import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import CreateUser from "./pages/CreateUser";

function App() {
  return (
    <div >
      <Topbar />
      <div className="flex bg-gray-100">
        <Sidebar />
        <div className="flex-[4] md:flex-[6] bg-gray-200">
          <Routes>
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/user-create" element={<CreateUser />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
