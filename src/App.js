import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/auth/Login';
import InstructorDashboard from './components/dashboard/InstructorDashboard';
import Dashboard from './components/dashboard/Dashboard';
import Students from './components/dashboard/Students';
import CourseDetails from './components/dashboard/CourseDetails';
import AddCourse from './components/dashboard/AddCourse';
import CourseManagement from './components/course/CourseManagement';
import InstructorProfile from './components/instructor/InstructorProfile';
import SignUp from './components/auth/SignUp';
import './styles/auth.css';
import './styles/common.css';
import './styles/dashboard/instructorDashboard.css';
import './styles/dashboard/sidebar.css';
import './styles/common/navbar.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<InstructorDashboard />} />
        <Route path="/my-courses" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/course-management" element={<CourseManagement />} />
        <Route path="/instructor/profile" element={<InstructorProfile />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
