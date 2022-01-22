import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from "./pages/UserList";
import Layout from "./pages/Layout";

function App() {
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
