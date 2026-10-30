
import React from 'react';
import './StudentList.css';

function StudentList({ students, deleteStudent }) {

  return (
    <div className="student-list">

      <h2>Student List</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {students.map((student) => (

            <tr key={student.id}>

              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>

              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {students.length === 0 && (
        <p>No Students Available!</p>
      )}

    </div>
  );
}

export default StudentList;


