import { Search, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ toggle }) {
  return (
    <div className="bg-slate-50 border-b border-gray-100 transition-all duration-300">
      {/* NAVBAR */}
      <nav className="flex px-6 py-4 gap-4 justify-between items-center bg-white relative z-20">
        {/* LEFT - MENU BUTTON & BRAND */}
        <div className="flex items-center gap-3">
          <button onClick={toggle} className="p-2 hover:bg-slate-100 rounded-lg transition text-slate-600">
            <Menu size={22} />
          </button>
          <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hidden sm:block">
            roll Arslan Ali call
          </span>
        </div>

        {/* CENTER - INTEGRATED SEARCH BAR */}
        <div className="flex-1 max-w-md mx-2">
          <div className="flex items-center gap-2 w-full py-1.5 px-4 rounded-xl bg-slate-50 border border-slate-200/80 focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/5 transition-all">
            <Search className="text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search students, classes, attendance ..."
              className="bg-transparent text-slate-700 placeholder-slate-400 w-full outline-none text-sm py-1"
            />
          </div>
        </div>

        {/* RIGHT - USER ICON */}
        <div className="flex items-center gap-1">
          <Link to='/teacher/profile' className="p-2 hover:bg-slate-100 rounded-lg transition text-slate-600" title="Profile">
            <User size={20} />
          </Link>
        </div>
      </nav>
    </div>
  );
}
