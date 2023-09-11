import React from 'react'

const Projects = () => {
  return (
    <div className="table-container">
      <h1>Ministry Dashboard</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No of Universities</th>
            <th>No of Colleges</th>
            <th>No of Students</th>
            <th>No of Projects</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((item, index) => (
            <tr key={index}>
              <td>{item.universityCount}</td>
              <td>{item.collegeCount}</td>
              <td>{item.studentCount}</td>
              <td>{item.projectCount}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>

  )
}

export default Projects
