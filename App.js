import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import StudentProfile from './studentprofile';
import TeacherProfile from './teacherprofile';
import User from './normalUser'; // Added import for Normal User
import Admin from './admin';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/student" element={<StudentProfile />} />
        <Route path="/teacher" element={<TeacherProfile />} />
        <Route path="/user" element={<User />} /> 
        <Route path="/admin" element={<Admin/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
