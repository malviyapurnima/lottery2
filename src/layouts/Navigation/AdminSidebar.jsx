import React, { useState } from "react";
import { useNavigate, Link, useMatch } from "react-router-dom";
import loginUserData from "../../store/loginUserData";
import Logo from "../../assets/images/logo.png";
import DashboardIcon from "../../assets/SVGs/DashboardIcon";
import UsersIcon from "../../assets/SVGs/UsersIcon";
import PoolsIcon from "../../assets/SVGs/PoolsIcon";
import AgentIcon from "../../assets/SVGs/AgentIcon";
import WinnersIcon from "../../assets/SVGs/WinnersIcon";
import ImagesIcon from "../../assets/SVGs/ImagesIcon";
import ContactIcon from "../../assets/SVGs/ContactIcon";
import SignOutIcon from "../../assets/SVGs/SignOutIcon";
import SignOutModal from "../../components/modal/Admin/SignOutModal";


function AdminSidebar() {

  const navigate = useNavigate();
  const { clearUserData } = loginUserData();
  const [showSignOutModal, setShowSignOutModal] = useState(false);

  function handleSignOut() {
    clearUserData();
    navigate("/admin/login");
  }

  function matchPath(path) {
    return useMatch(path);
  }

  function showSignOutModalHandler() {
    setShowSignOutModal(true);
  };

  function closeSignOutModalHandler() {
    setShowSignOutModal(false);
  };

  return (
    <>
      <div>
        <div className="flex justify-center">
          <Link to="/admin" className="flex items-center mb-2 font-semibold">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <aside
          id="sidebar-multi-level-sidebar"
          className="w-64 "
          aria-label="Sidebar"
        >
          <div className="h-full overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li >
                <Link to="/admin" className={`flex items-center px-5 py-2 group ${matchPath("/admin") ? "bg-white" : ""}`}>
                  <DashboardIcon fill={`${matchPath("/admin") ? "#0B3447" : "white"}`} />
                  <span className={`ms-3 ${matchPath("/admin") ? "text-primary-dark" : "text-white"}`}>Dashboard</span>
                </Link>
              </li>

              <li>
                <Link to="/admin/user" className={`flex items-center px-5 py-2 group ${matchPath("/admin/user") ? "bg-white" : ""}`}>
                  <UsersIcon fill={`${matchPath("/admin/user") ? "#0B3447" : "white"}`} />
                  <span className={`ms-3 ${matchPath("/admin/user") ? "text-primary-dark" : "text-white"}`}>
                    Users
                  </span>
                </Link>
              </li>

              <li>
                <Link to="/admin/pool" className={`flex items-center px-5 py-2 group ${matchPath("/admin/pool") ? "bg-white" : ""}`}>
                  <PoolsIcon fill={`${matchPath("/admin/pool") ? "#0B3447" : "white"}`} />
                  <span className={`ms-3 ${matchPath("/admin/pool") ? "text-primary-dark" : "text-white"}`}>
                    Pool
                  </span>
                </Link>
              </li>

              <li>
                <Link to="/admin/agent" className={`flex items-center px-5 py-2 group ${matchPath("/admin/agent") ? "bg-white" : ""}`}>
                  <AgentIcon fill={`${matchPath("/admin/agent") ? "#0B3447" : "white"}`} />
                  <span className={`ms-3 ${matchPath("/admin/agent") ? "text-primary-dark" : "text-white"}`}>
                    Agent
                  </span>
                </Link>
              </li>

              <li>
                <Link to="/admin/winner" className={`flex items-center px-5 py-2 group ${matchPath("/admin/winner") ? "bg-white" : ""}`}>
                  <WinnersIcon fill={`${matchPath("/admin/winner") ? "#0B3447" : "white"}`} />
                  <span className={`ms-3 ${matchPath("/admin/winner") ? "text-primary-dark" : "text-white"}`}>
                    Winners
                  </span>
                </Link>
              </li>

              {/* <li>
                <Link to="/admin/images" className={`flex items-center px-5 py-2 group ${matchPath("/admin/images") ? "bg-white" : ""}`}>
                  <PoolsIcon fill={`${matchPath("/admin/images") ? "#0B3447" : "white"}`} />
                  <span className={`ms-3 ${matchPath("/admin/images") ? "text-primary-dark" : "text-white"}`}>
                    Images
                  </span>
                </Link>
              </li> */}

              <li>
                <Link to="/admin/mobileparticipants" className={`flex items-center px-5 py-2 group ${matchPath("/admin/mobileparticipants") ? "bg-white" : ""}`}>
                  <UsersIcon fill={`${matchPath("/admin/mobileparticipants") ? "#0B3447" : "white"}`} />
                  <span className={`ms-3 ${matchPath("/admin/mobileparticipants") ? "text-primary-dark" : "text-white"}`}>
                    Mobile Participants
                  </span>
                </Link>
              </li>

              <li>
                <Link to="/admin/contactus" className={`flex items-center px-5 py-2 group ${matchPath("/admin/contactus") ? "bg-white" : ""}`}>
                  <ContactIcon fill={`${matchPath("/admin/contactus") ? "#0B3447" : "white"}`} />
                  <span className={`ms-3 ${matchPath("/admin/contactus") ? "text-primary-dark" : "text-white"}`}>
                    Contact Us
                  </span>
                </Link>
              </li>

              <li>
                <p
                  onClick={showSignOutModalHandler}
                  className="flex items-center cursor-pointer px-5 py-2 text-white rounded-lg group"
                >
                  <SignOutIcon />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Sign Out
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <SignOutModal
        isOpen={showSignOutModal}
        onClose={closeSignOutModalHandler}
        onConfirm={handleSignOut}
      />
    </>
  );
}

export default AdminSidebar;
