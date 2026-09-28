import UserProfile from "./UserProfile";

const Navbar = () => {
  return (
    <div className=" h-20 bg-slate-200 flex items-center justify-center">
      <header></header>
      <nav>
        <div className="flex items-center">
          <label htmlFor="search" className="font-medium">
            Search:
          </label>
          <input
            type="search"
            name="search"
            id="search"
            className="ml-3 rounded-xl w-full border border-slate-200 bg-slate-50 px-4 py-2 text-slate-900 placeholder:text-slate-500 focus-visibility:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
            placeholder="search"
          />
        </div>
      </nav>
      <UserProfile />
    </div>
  );
};

export default Navbar;
