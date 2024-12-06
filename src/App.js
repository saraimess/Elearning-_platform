import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminApp from "./admin/AdminApp";
import TeacherApp from "./teacher/TeacherApp";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/admin" />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminApp />} />
        
        {/* Teacher Routes */}
        <Route path="/teacher/*" element={<TeacherApp />} />
        
        {/* Student Routes - To be implemented */}
        {/* <Route path="/student/*" element={<StudentApp />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
