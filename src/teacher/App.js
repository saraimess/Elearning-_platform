import React from "react";
import { Routes, Route } from "react-router-dom";
import InstructorDashboard from './components/dashboard/InstructorDashboard';
import Dashboard from './components/dashboard/Dashboard';
import Students from './components/dashboard/Students';
import CourseDetails from './components/dashboard/CourseDetails';
import AddCourse from './components/dashboard/AddCourse';
import CourseManagement from './components/course/CourseManagement';
import InstructorProfile from './components/instructor/InstructorProfile';

import './styles/auth.css';
import './styles/common.css';
import './styles/dashboard/instructorDashboard.css';
import './styles/dashboard/sidebar.css';
import './styles/common/navbar.css';

function TeacherApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InstructorDashboard />} />
        <Route path="my-courses" element={<Dashboard />} />
        <Route path="students" element={<Students />} />
        <Route path="course/:id" element={<CourseDetails />} />
        <Route path="add-course" element={<AddCourse />} />
        <Route path="course-management" element={<CourseManagement />} />
        <Route path="profile" element={<InstructorProfile />} />
      </Routes>
    </div>
  );
}

export default TeacherApp;
