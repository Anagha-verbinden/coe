import { BadgePercent, BookOpen, ChevronLeft, FileText, GraduationCap, LayoutDashboard, LogOut, Mail, Users } from "lucide-react";
function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <img src="/logo.webp" alt="Center of Excellence" className="sidebar-logo" />
                <button className="collapse-btn">
                    <ChevronLeft size={30}/>
                </button>
            </div>
            <nav className="sidebar-nav">
                <a href="#" className="nav-item">
                    <LayoutDashboard size={20}/>
                    <span>Dashboard</span>
                </a>
                <a href="#" className="nav-item">
                    <BookOpen size={20}/>
                    <span>Programs</span>
                </a>
                <a href="#" className="nav-item">
                    <GraduationCap size={20}/>
                    <span>Universities</span>
                </a>
                <a href="#" className="nav-item">
                    <Users size={20}/>
                    <span>Students</span>
                </a>
                <a href="#" className="nav-item">
                    <FileText size={20}/>
                    <span>Resources</span>
                </a>
                <a href="#" className="nav-item">
                    <BadgePercent size={20}/>
                    <span>Offers</span>
                </a>
                <a href="#" className="nav-item">
                    <Mail size={20}/>
                    <span>Communication</span>
                </a>
            </nav>
            <div className="sidebar-bottom">
                <a href="#" className="nav-item logout">
                    <LogOut size={20}/>
                    <span>LogOut</span>
                </a>
            </div>
        </aside>
    );
}
export default Sidebar;