import React, { useState } from 'react';
import Navbar from '../common/Navbar';
import Sidebar from '../common/Sidebar';
import '../../styles/dashboard/students.css';

function Students() {
  const [searchTerm, setSearchTerm] = useState('');

  const students = [
    {
      id: 1,
      name: "John Doe",
      course: "React JS Basic to Advance",
      joiningDate: "2023-11-20",
      email: "john@example.com",
      progress: 75
    },
    {
      id: 2,
      name: "Jane Smith",
      course: "Basic to Advance Figma",
      joiningDate: "2023-11-15",
      email: "jane@example.com",
      progress: 45
    }
  ];

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <main className="dashboard-content">
          <div className="students-header">
            <h1>Students</h1>
            <div className="header-actions">
              <div className="search-box">
                <input 
                  type="text" 
                  placeholder="Search students..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="fas fa-search"></i>
              </div>
            </div>
          </div>
          <div className="table-container">
            <table className="students-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Joining Date</th>
                  <th>Email</th>
                  <th>Progress</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map(student => (
                  <tr key={student.id}>
                    <td>
                      <div className="student-info">
                        <img src={`https://ui-avatars.com/api/?name=${student.name}`} alt={student.name} />
                        <span>{student.name}</span>
                      </div>
                    </td>
                    <td>{student.course}</td>
                    <td>{student.joiningDate}</td>
                    <td>{student.email}</td>
                    <td>
                      <div className="progress-bar">
                        <div 
                          className="progress" 
                          style={{ width: `${student.progress}%` }}
                        ></div>
                        <span className="progress-text">{student.progress}%</span>
                      </div>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button className="edit-btn" title="Edit">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="delete-btn" title="Delete">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Students; 