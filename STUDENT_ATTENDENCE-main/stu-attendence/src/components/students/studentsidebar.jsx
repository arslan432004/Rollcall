import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  CheckSquare, 
  Award, 
  Calendar, 
  User, 
  LogOut 
} from 'lucide-react';
import { FaPenFancy } from "react-icons/fa";

const StudentSidebar = ({ isOpen }) => {
  const location = useLocation();

  const menuItems = [
    { path: "/student/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/student/courses", label: "My Courses", icon: BookOpen },
    { path: "/student/attendance", label: "Attendance", icon: CheckSquare },
    { path: "/student/grades", label: "Grades", icon: Award },
    { path: "/student/schedule", label: "Schedule", icon: Calendar },
    { path: "/student/profile", label: "Profile", icon: User },
  ];

  const handlelogout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-slate-900 text-slate-100 shadow-2xl border-r border-slate-800/50 
      transition-all duration-300 overflow-hidden z-30 flex flex-col
      ${isOpen ? "w-64" : "w-0"}`}
    >
      {/* Brand Header */}
      <div className="p-6 border-b border-slate-800/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-xl flex justify-center items-center shadow-lg shadow-blue-500/20">
            <FaPenFancy className="text-white text-lg" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">Rollcall</h1>
            <p className="text-xs text-blue-400 font-medium">Student Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative ${
                isActive
                  ? "bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/15"
                  : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/40"
              }`}
            >
              {/* Active left glowing bar */}
              {isActive && (
                <span className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-white rounded-r-full"></span>
              )}
              <Icon size={18} className={isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200 transition-colors"} />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Action */}
      <div className="p-4 border-t border-slate-800/60">
        <button
          onClick={handlelogout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition duration-200"
        >
          <LogOut size={18} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default StudentSidebar;