import {
  Briefcase,
  FileText,
  LayoutDashboard,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  User,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Internships",
    path: "/internships",
    icon: Briefcase,
  },
  {
    label: "Applications",
    path: "/applications",
    icon: FileText,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: User,
  },
];

export default function Sidebar() {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <aside
      className={`fixed left-0 top-0 h-screen border-r border-slate-200 bg-white transition-all duration-300 ${
        isExpanded ? "w-64" : "w-20"
      }`}
    >
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div
          className={`flex h-16 items-center border-b border-slate-100 ${
            isExpanded ? "justify-between px-4" : "justify-center"
          }`}
        >
          {isExpanded && (
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                <span className="text-sm font-bold text-white">TI</span>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-800">
                  Tengfei Internship
                </p>

                <p className="text-[11px] text-slate-400">Internship Portal</p>
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className={`rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-blue-600 ${
              !isExpanded ? "absolute left-1/2 -translate-x-1/2" : ""
            }`}
          >
            {isExpanded ? (
              <PanelLeftClose className="h-5 w-5" />
            ) : (
              <PanelLeftOpen className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  title={!isExpanded ? item.label : undefined}
                  className={({ isActive }) =>
                    `flex items-center rounded-lg py-2.5 text-sm font-medium transition ${
                      isExpanded ? "gap-3 px-3" : "justify-center px-2"
                    } ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                    }`
                  }
                >
                  <Icon className="h-5 w-5 shrink-0" />

                  {isExpanded && <span>{item.label}</span>}
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Logout */}
        <div className="border-t border-slate-100 p-4">
          <button
            type="button"
            title={!isExpanded ? "Logout" : undefined}
            className={`flex w-full items-center rounded-lg py-2.5 text-sm font-medium text-slate-500 transition hover:bg-red-50 hover:text-red-500 ${
              isExpanded ? "gap-3 px-3" : "justify-center px-2"
            }`}
          >
            <LogOut className="h-5 w-5 shrink-0" />

            {isExpanded && <span>Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}
