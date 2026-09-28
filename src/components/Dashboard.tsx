import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import Login from "./Login";

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.user);

  if (!user.isLoggedIn) {
    return <Login />;
  }

  const statsCard = (title: string, value: number) => {
    return (
      <div className="flex-1 min-w-[45%] bg-white p-4 rounded-2xl shadow-md flex flex-col gap-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-[#7376B2] text-3xl mb-1"> {value} </p>
      </div>
    );
  };
  return (
    <div className="p-4 h-screen">
      <header className="font-3xl font-bold">Welcome back, {user.name}!</header>
      <p> Here's what's happening today.</p>
      <div className="w-full flex flex-wrap gap-3 mt-3">
        {statsCard("Total Users", 128)}
        {statsCard("Active Users", 96)}
        {statsCard("New Users", 12)}
        {statsCard("Admins", 4)}
      </div>
      <section className="flex gap-3 mt-5">
        <div className="max-w-md w-full bg-white px-4 py-5 rounded-2xl shadow-md">
          <h3 className="text-xl font-bold">Recent Activity</h3>
          <ul className="mt-4 text-gray-800">
            <li> ✅ Sarah joined the platform</li>
            <li> ✅ John updated his profile</li>
            <li> ✅ 3 new users registered</li>
            <li> ✅ Bala is now an Admin</li>
            <li> ✅ You can now edit your profile from the dashboard</li>
          </ul>
        </div>
        <div className="max-w-md w-full bg-white px-4 py-5 rounded-3xl shadow-md">
          <h3 className="text-xl font-bold">Quick Actions</h3>
          <ul className="mt-4">
            <li className="px-2 py-2.5 mb-3 bg-gray-500 hover:bg-gray-700 text-white rounded-md text-center">
              <a href="">Add User</a>
            </li>
            <li className="px-2 py-2.5 mb-3 bg-gray-500 hover:bg-gray-700 text-white rounded-md text-center">
              <a href="">View Users</a>
            </li>
            <li className="px-2 py-2.5 bg-gray-500 hover:bg-gray-700 text-white rounded-md text-center">
              <a href="">Edit Profile</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
