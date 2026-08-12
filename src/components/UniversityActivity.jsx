import { useState } from "react";
import { Search } from "lucide-react";
import TableContainer from "./TableContainer";
import "./UniversityActivity.css";

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
  const [search, setSearch] = useState("")
  const filteredUniversities = universities.filter((university)=>university.name.toLowerCase().includes(search.toLowerCase()));
  // university name considers name of universities and includes() will check whether name contains the search text and returns true if so.
  return (
    <section className="university-activity">

      <div className="activity-header">
        <h2>University Activity</h2>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search Universities"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}  // this is where the search input is being taken and fed to search.
          />
          <Search size={30} />
        </div>
      </div>

{/* TableContainer controls visible area and scrolling while table controls table content and width.
if we try to do overflow - auto in table , overflow will be disabled, text bleeding outside screen will be cut. */}
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>University Name</th>
              <th>Total Enrolled Programs</th>
              <th>Total Active Cohorts</th>
              <th>Total Faculty</th>
              <th>Total Student</th>
              <th>Total Enrolled Students</th>
              <th>Total Certifications</th>
            </tr>
          </thead>


          <tbody>

            {filteredUniversities.map((university) => (
              <tr key={university.name}>
                <td>{university.name}</td>
                <td>{university.programs}</td>
                <td>{university.cohorts}</td>
                <td>{university.faculty}</td>
                <td>{university.students}</td>
                <td>{university.enrolledStudents}</td>
                <td>{university.certifications}</td>
              </tr>
            ))}

          </tbody>

        </table>
      </TableContainer>

    </section>
  );
}


export default UniversityActivity;