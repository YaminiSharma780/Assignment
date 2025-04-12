import React from "react";
import dashboard from "../assets/dashboard.png";
import bos from "../assets/bos.png";
import program from "../assets/program.png";
import feeCreation from "../assets/fee-creation.png";

function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <div className="sidebar-features">
            <img src={dashboard} />
            <h4>Dashboard</h4>
          </div>
        </li>
        <li>
          <div className="sidebar-features">
            <img src={bos} />
            <h4>BOS</h4>
          </div>
        </li>
        <li>
          <div className="sidebar-features">
            <img src={program} />
            <h4>Program</h4>
          </div>
        </li>
        <li>
          <div className="sidebar-features">
            <img src={feeCreation} />
            <h4>Fees Creation</h4>
          </div>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
