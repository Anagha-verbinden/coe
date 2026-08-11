import TableContainer from "./TableContainer";
import React from "react";

const UniversityActivity = () => {
  return (
    <section>
      <div className="activity-header">
        <h2>University Activity</h2>
        <input type="text" placeholder="Search Universities" />
      </div>

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
            <tr>
              <td>University of Chicago</td>
              <td>2</td>
              <td>0</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Sapna University</td>
              <td>7</td>
              <td>1</td>
              <td>2</td>
              <td>9</td>
              <td>5</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Western Crest University</td>
              <td>6</td>
              <td>1</td>
              <td>2</td>
              <td>6</td>
              <td>5</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </TableContainer>
      <section></section>
    </section>
  );
};

export default UniversityActivity;
