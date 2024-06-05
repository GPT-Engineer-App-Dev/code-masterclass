import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import EnrolledCourses from "./pages/EnrolledCourses.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/enrolled-courses" element={<EnrolledCourses />} />
      </Routes>
    </Router>
  );
}

export default App;
