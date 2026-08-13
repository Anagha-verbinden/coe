import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import TableContainer from "./TableContainer";

const programs = [
  {
    name: "Test Program",
    level: "Undergraduate",
    modules: 2,
    createdDate: "13-Jul-2026",
    lastUpdated: "13-Jul-2026",
    assignedUniversities: 0,
    status: "Published",
  },
  {
    name: "Introduction to Machine Learning",
    level: "Undergraduate",
    modules: 7,
    createdDate: "06-Jul-2026",
    lastUpdated: "06-Jul-2026",
    assignedUniversities: 3,
    status: "Published",
  },
  {
    name: "DevSecOps Lab In A Box",
    level: "Graduate",
    modules: 4,
    createdDate: "19-Jun-2026",
    lastUpdated: "19-Jun-2026",
    assignedUniversities: 2,
    status: "Archived",
  },
];

const ProgramActivity = () => {
  const [search, setSearch] = useState("");

  const filteredPrograms = programs.filter((program) =>
    program.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-8 rounded-2xl bg-white p-8 shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
      
      {/* Top Section */}
      <div className="flex items-center justify-between">
        
        {/* Filter Buttons */}
        <div className="flex gap-4">
          <button className="flex items-center justify-between gap-20 rounded-lg bg-[#2161f5] px-5 py-3 text-lg text-white">
            <span>Program Level</span>
            <ChevronDown size={18} />
          </button>

          <button className="flex items-center justify-between gap-20 rounded-lg bg-[#2161f5] px-5 py-3 text-lg text-white">
            <span>Status</span>
            <ChevronDown size={18} />
          </button>
        </div>

        {/* Search Box */}
        <div className="flex h-[55px] w-[400px] items-center rounded-lg border border-[#e0e0e0] px-4">
          <input
            type="text"
            placeholder="Search programs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            // e is action like giving input or mouseclick , target is targetting that html element and value is accessing the value inside it.
            className="flex-1 bg-transparent text-lg outline-none placeholder:text-[#8b93a3]"
          />
          <Search
            size={24}
            className="shrink-0 text-[#9aa3b2]"
          />
        </div>
      </div>

      {/* Table */}
      <div className="mt-6 max-h-[400px] overflow-y-auto">
        <TableContainer>
          <table className="w-full min-w-[1400px] border-collapse">
            
            <thead>
              <tr>
                <th className="min-w-[280px] bg-[#eaf0ff] px-6 py-4 text-left text-lg font-normal text-[#6f788b]">
                  Program Name
                </th>

                <th className="min-w-[180px] bg-[#eaf0ff] px-6 py-4 text-left text-lg font-normal text-[#6f788b]">
                  Program Level
                </th>

                <th className="min-w-[180px] bg-[#eaf0ff] px-6 py-4 text-center text-lg font-normal text-[#6f788b]">
                  Modules
                </th>

                <th className="min-w-[180px] bg-[#eaf0ff] px-6 py-4 text-left text-lg font-normal text-[#6f788b]">
                  Created Date
                </th>

                <th className="min-w-[180px] bg-[#eaf0ff] px-6 py-4 text-left text-lg font-normal text-[#6f788b]">
                  Last Updated
                </th>

                <th className="min-w-[220px] bg-[#eaf0ff] px-6 py-4 text-left text-lg font-normal text-[#6f788b]">
                  Assigned Universities
                </th>

                <th className="min-w-[180px] bg-[#eaf0ff] px-6 py-4 text-left text-lg font-normal text-[#6f788b]">
                  Status
                </th>

                <th className="min-w-[180px] bg-[#eaf0ff] px-6 py-4 text-left text-lg font-normal text-[#6f788b]">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredPrograms.map((program) => (
                <tr key={program.name}>
                  <td className="min-w-[280px] whitespace-nowrap border-b border-[#dddddd] px-6 py-5 text-lg text-[#183b64]">
                    {program.name}
                  </td>

                  <td className="min-w-[180px] whitespace-nowrap border-b border-[#dddddd] px-6 py-5 text-lg text-[#183b64]">
                    {program.level}
                  </td>

                  <td className="min-w-[180px] whitespace-nowrap border-b border-[#dddddd] px-6 py-5 text-lg text-[#183b64] text-center">
                    {program.modules}
                  </td>

                  <td className="min-w-[180px] whitespace-nowrap border-b border-[#dddddd] px-6 py-5 text-lg text-[#183b64]">
                    {program.createdDate}
                  </td>

                  <td className="min-w-[180px] whitespace-nowrap border-b border-[#dddddd] px-6 py-5 text-lg text-[#183b64]">
                    {program.lastUpdated}
                  </td>

                  <td className="min-w-[220px] whitespace-nowrap border-b border-[#dddddd] px-6 py-5 text-lg text-[#183b64]">
                    {program.assignedUniversities}
                  </td>

                  <td className="min-w-[180px] whitespace-nowrap border-b border-[#dddddd] px-6 py-5 text-lg text-[#183b64]">
                    {program.status}
                  </td>

                  <td className="min-w-[180px] whitespace-nowrap border-b border-[#dddddd] px-6 py-5 text-lg text-[#183b64]">
                    Actions
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ProgramActivity;