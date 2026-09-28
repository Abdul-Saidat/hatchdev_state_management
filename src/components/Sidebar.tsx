// import React from 'react'
import UserProfile from "./UserProfile";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/user/userSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-4 col-span-2">
      <UserProfile />
      <nav>
        <ul>
          {/* <li><a href="/">Home</a></li> */}
          <li>
            <a href="">Dashboard</a>
          </li>
          <li>
            <a href="">Users</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleLogout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
