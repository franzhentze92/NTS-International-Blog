import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FileText, Plus, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/articles", label: "Articles", icon: FileText },
  { to: "/admin/articles/new", label: "New Article", icon: Plus },
];

export const AdminLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#f1f1f1] flex">
      <aside className="w-56 bg-[#15171A] text-white flex-shrink-0 flex flex-col">
        <div className="p-4 border-b border-white/10">
          <Link to="/admin" className="font-bold text-lg text-white no-underline">
            Blog Admin
          </Link>
        </div>
        <nav className="p-2 flex-1">
          {nav.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md text-sm no-underline transition-colors",
                location.pathname === to || (to !== "/admin" && location.pathname.startsWith(to))
                  ? "bg-[#a4d037] text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="p-2 border-t border-white/10">
          <Link
            to="/"
            className="block px-3 py-2 text-sm text-white/70 hover:text-white no-underline"
          >
            ← View blog
          </Link>
        </div>
      </aside>
      <main className="flex-1 overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
