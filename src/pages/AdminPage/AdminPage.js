import React from "react";
import SideBar from "./SideBar";

function AdminPage() {
  return (
    <div>
      <div className="border">
        <div className="my-3 mx-4 d-flex justify-content-between  ">
          <div className="fs-2 fw-bold">digg</div>

          <div>
            <button>Save {"&"} Share</button>
          </div>
        </div>
      </div>
      <SideBar />
    </div>
  );
}

export default AdminPage;
