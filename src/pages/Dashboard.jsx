import React from "react";
import {
  Award,
  BadgePercent,
  BookOpen,
  ChevronLeft,
  FileBadge,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Mail,
  User,
  Users,
  Search,
  Route,
} from "lucide-react";
import UniversityActivity from "../components/UniversityActivity";
import StatCard from "../components/StatCard";

const Dashboard = () => {
  return (
    <div>
      <main>
        <section>
          <h2 className="text-[24px] font-semibold mb-1">University Data</h2>
          <div className="grid grid-cols-4 gap-[22px] mb-4">
            <StatCard
              icon={GraduationCap}
              value="3"
              label="Total Universities"
            />
            <StatCard
              icon={GraduationCap}
              value="3"
              label="Total Enrolled Universities"
            />
            <StatCard icon={BookOpen} value="9" label="Total Active Programs" />
            <StatCard
              icon={BookOpen}
              value="15"
              label="Total Programs Assigned"
            />
          </div>
        </section>
        <section>
          <h2 className="text-[24px] font-semibold mb-1">Cohorts Data</h2>
          <div className="grid grid-cols-4 gap-[22px] mb-4">
            <StatCard icon={Users} value="18" label="Total Cohort" />
            <StatCard icon={Users} value="2" label="Total Active Cohort" />
          </div>
        </section>
        <section>
          <h2 className="text-[24px] font-semibold mb-1">Students Data</h2>
          <div className="grid grid-cols-4 gap-[22px] mb-4">
            <StatCard icon={GraduationCap} value="8" label="Total Students" />
            <StatCard
              icon={GraduationCap}
              value="4"
              label="Total Enrolled Students"
            />
            <StatCard icon={Award} value="1" label="Total Certifications" />
            <StatCard
              icon={FileBadge}
              value="1"
              label="Total Capstone Projects"
            />
          </div>
        </section>
        <UniversityActivity />
      </main>
    </div>
  );
};

export default Dashboard;
