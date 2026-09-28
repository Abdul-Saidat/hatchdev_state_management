import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="grid grid-cols-[16rem_1fr] grid-rows-[auto_1fr] min-h-screen">
      <div className="row-span-2">
        <Sidebar />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="p-4">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
