import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <div className="App">
      <Header
        onBurgerClick={() => setSidebarOpen(!isSidebarOpen)}
        onLoginClick={() => setLoginOpen(true)}
      />
      <Sidebar isOpen={isSidebarOpen} />
      <main className={`content ${isSidebarOpen ? "with-sidebar" : ""}`}>
        <Home />
      </main>
      {isLoginOpen && <Login onClose={() => setLoginOpen(false)} />}
    </div>
  );
}

export default App;
