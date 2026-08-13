import {
  BadgePercent,
  BookOpen,
  ChevronLeft,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Mail,
  Users,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside
      className="
        fixed top-0 left-0
        flex h-screen w-[360px] flex-col
        bg-[#2161f5] px-[18px] py-5
        text-white
      "
    >
      {/* Sidebar Header */}
      <div className="relative flex h-[180px] items-center justify-center">
        <img
          src="/logo.webp"
          alt="Center of Excellence"
          className="h-auto w-[150px]"
        />

        <button
          className="
            absolute right-[-2px] top-[15px]
            cursor-pointer border-none bg-transparent text-white
          "
        >
          <ChevronLeft size={30} />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex flex-col gap-[10px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex h-16 items-center gap-[22px] rounded-xl px-[22px] text-[23px] font-medium no-underline transition-all duration-200 ${
              isActive
                ? "bg-white text-[#2161f5]"
                : "text-white hover:bg-white/15"
            }`
          }
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/programs"
          className={({ isActive }) =>
            `flex h-16 items-center gap-[22px] rounded-xl px-[22px] text-[23px] font-medium no-underline transition-all duration-200 ${
              isActive
                ? "bg-white text-[#2161f5]"
                : "text-white hover:bg-white/15"
            }`
          }
        >
          <BookOpen size={20} />
          <span>Programs</span>
        </NavLink>

        <a
          href="#"
          className="flex h-16 items-center gap-[22px] rounded-xl px-[22px] text-[23px] font-medium text-white no-underline transition-all duration-200 hover:bg-white/15"
        >
          <GraduationCap size={20} />
          <span>Universities</span>
        </a>

        <a
          href="#"
          className="flex h-16 items-center gap-[22px] rounded-xl px-[22px] text-[23px] font-medium text-white no-underline transition-all duration-200 hover:bg-white/15"
        >
          <Users size={20} />
          <span>Students</span>
        </a>

        <a
          href="#"
          className="flex h-16 items-center gap-[22px] rounded-xl px-[22px] text-[23px] font-medium text-white no-underline transition-all duration-200 hover:bg-white/15"
        >
          <FileText size={20} />
          <span>Resources</span>
        </a>

        <a
          href="#"
          className="flex h-16 items-center gap-[22px] rounded-xl px-[22px] text-[23px] font-medium text-white no-underline transition-all duration-200 hover:bg-white/15"
        >
          <BadgePercent size={20} />
          <span>Offers</span>
        </a>

        <a
          href="#"
          className="flex h-16 items-center gap-[22px] rounded-xl px-[22px] text-[23px] font-medium text-white no-underline transition-all duration-200 hover:bg-white/15"
        >
          <Mail size={20} />
          <span>Communication</span>
        </a>
      </nav>

      {/* Sidebar Bottom */}
      <div className="mt-auto border-t border-white/20 pt-5">
        <a
          href="#"
          className="mb-5 flex h-16 items-center gap-[22px] rounded-xl px-[22px] text-[23px] font-medium text-white no-underline transition-all duration-200 hover:bg-white/15"
        >
          <LogOut size={20} />
          <span>LogOut</span>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;