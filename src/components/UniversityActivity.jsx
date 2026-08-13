import { useState } from "react";
import { Search } from "lucide-react";
import TableContainer from "./TableContainer";

const universities = [
  {
    name: "University of Chicago",
    programs: 2,
    cohorts: 0,
    faculty: 2,
    students: 2,
    enrolledStudents: 2,
    certifications: 0,
  },
  {
    name: "Sapna University",
    programs: 7,
    cohorts: 1,
    faculty: 2,
    students: 9,
    enrolledStudents: 5,
    certifications: 1,
  },
  {
    name: "Western Crest University",
    programs: 6,
    cohorts: 1,
    faculty: 2,
    students: 6,
    enrolledStudents: 5,
    certifications: 0,
  },
];

function UniversityActivity() {
  const [search, setSearch] = useState("");

  const filteredUniversities = universities.filter((university) =>
    university.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      className="
        mt-10
        rounded-2xl
        bg-white
        p-8
        shadow-[0_2px_6px_rgba(0,0,0,0.08)]
      "
    >
      {/* Header */}
      <div className="mb-7 flex items-center justify-between">
        <h2 className="text-[28px] font-semibold">
          University Activity
        </h2>

        {/* Search Box */}
        <div
          className="
            flex h-[55px] w-[400px] items-center
            rounded-lg border border-[#e0e0e0]
            bg-white px-4 text-[#9aa3b2]
          "
        >
          <input
            type="text"
            placeholder="Search Universities"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              flex-1 border-none bg-transparent
              text-lg outline-none
              placeholder:text-[#8b93a3]
            "
          />

          <Search
            size={30}
            className="shrink-0"
          />
        </div>
      </div>

      {/* Table */}
      <TableContainer>
        <table className="w-full min-w-[1100px] border-collapse">
          <thead>
            <tr>
              <th
                className="
                  h-[70px] min-w-[280px]
                  bg-[#eaf0ff] px-6 py-4
                  text-left text-lg font-normal text-[#6f788b]
                "
              >
                University Name
              </th>

              <th className="h-[70px] min-w-[180px] bg-[#eaf0ff] px-6 py-4 text-left text-lg font-normal text-[#6f788b]">
                Total Enrolled Programs
              </th>

              <th className="h-[70px] min-w-[180px] bg-[#eaf0ff] px-6 py-4 text-left text-lg font-normal text-[#6f788b]">
                Total Active Cohorts
              </th>

              <th className="h-[70px] min-w-[180px] bg-[#eaf0ff] px-6 py-4 text-left text-lg font-normal text-[#6f788b]">
                Total Faculty
              </th>

              <th className="h-[70px] min-w-[180px] bg-[#eaf0ff] px-6 py-4 text-left text-lg font-normal text-[#6f788b]">
                Total Student
              </th>

              <th className="h-[70px] min-w-[180px] bg-[#eaf0ff] px-6 py-4 text-left text-lg font-normal text-[#6f788b]">
                Total Enrolled Students
              </th>

              <th className="h-[70px] min-w-[180px] bg-[#eaf0ff] px-6 py-4 text-left text-lg font-normal text-[#6f788b]">
                Total Certifications
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredUniversities.map((university) => (
              <tr key={university.name}>
                <td className="min-w-[280px] whitespace-nowrap border-b border-[#dddddd] px-6 py-5 text-lg text-[#183b64]">
                  {university.name}
                </td>

                <td className="min-w-[180px] whitespace-nowrap border-b border-[#dddddd] px-6 py-5 text-lg text-[#183b64]">
                  {university.programs}
                </td>

                <td className="min-w-[180px] whitespace-nowrap border-b border-[#dddddd] px-6 py-5 text-lg text-[#183b64]">
                  {university.cohorts}
                </td>

                <td className="min-w-[180px] whitespace-nowrap border-b border-[#dddddd] px-6 py-5 text-lg text-[#183b64]">
                  {university.faculty}
                </td>

                <td className="min-w-[180px] whitespace-nowrap border-b border-[#dddddd] px-6 py-5 text-lg text-[#183b64]">
                  {university.students}
                </td>

                <td className="min-w-[180px] whitespace-nowrap border-b border-[#dddddd] px-6 py-5 text-lg text-[#183b64]">
                  {university.enrolledStudents}
                </td>

                <td className="min-w-[180px] whitespace-nowrap border-b border-[#dddddd] px-6 py-5 text-lg text-[#183b64]">
                  {university.certifications}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </section>
  );
}

export default UniversityActivity;