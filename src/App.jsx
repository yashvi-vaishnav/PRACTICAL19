
import React, { useState } from 'react';

import StudentList from './Component/StudentList';

import './App.css';

function App() {

  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'vipa',
      email: 'vipa@gmail.com',
      course: 'NURSING'
    },
    {
      id: 2,
      name: 'suhani',
      email: 'suhani@gmail.com',
      course: 'BBA'
    },
    {
      id: 3,
      name: 'tanisha',
      email: 'tanisha@gmail.com',
      course: 'MCA'
    },
    {
      id: 4,
      name: 'devki',
      email: 'devki@gmail.com',
      course: 'B.Com'
    }
  ]);

  const deleteStudent = (id) => {

    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);

  };

  return (
    <div>

      <h1 className="heading">
        Student Management System
      </h1>

      <StudentList
        students={students}
        deleteStudent={deleteStudent}
      />

    </div>
  );
}

export default App;
