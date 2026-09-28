import UserProfile from "./UserProfile";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/user/userSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-4 col-span-1">
      <UserProfile />
      <nav className="flex flex-col">
        <ul className="flex flex-col gap-3 mt-10">
          <li className="hover:bg-gray-700 px-2 py-3 rounded-2xl">
            <a href="">Dashboard</a>
          </li>
          <li className="hover:bg-gray-700 px-2 py-3 rounded-2xl">
            <a href="">Users</a>
          </li>
          <li className="hover:bg-gray-700 px-2 py-3 rounded-2xl">
            <a href="">Settings</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleLogout}
        className="cursor-pointer mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
