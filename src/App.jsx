import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
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
} from "lucide-react";
import UniversityActivity from "./components/UniversityActivity";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <section>
          <h2>University Data</h2>
          <div className="stats-grid">
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
          <h2>Cohorts Data</h2>
          <div className="stats-grid">
            <StatCard icon={Users} value="18" label="Total Cohort" />
            <StatCard icon={Users} value="2" label="Total Active Cohort" />
          </div>
        </section>
        <section>
          <h2>Students Data</h2>
          <div className="stats-grid">
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
        <UniversityActivity/>
      </main>
      
    </>
  );
}

export default App;
