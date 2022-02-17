import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function SideBar() {
  return (
    <div className="sidebar ">
      <div className="sidebarMenu">
        <ul className="sidebarList">
          <li
            className={`sidebarListItem 
              `}
          >
            <div className="Title fw-bold"> Questions </div>
          </li>

          <li
            className={`sidebarListItem 
              `}
          >
            <button style={{ width: "200px", backgroundColor: "white" }}>
              {" "}
              +
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
