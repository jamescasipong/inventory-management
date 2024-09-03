import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HomePages from "./components/HomePages";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route that redirects to the login page */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Route for HomePage */}
        <Route path="/home" element={<HomePages />} />

        {/* Route for Login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for Signup page */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
