import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Log-in";
import Dashboard from "./pages/Dashboard";
import POSSystem  from "./pages/Pos";
import SignUp from "./pages/Sign-up";
import Forgetpassword from "./pages/Forgetpassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/pos" element={<POSSystem />} />
         <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
      </Routes>
    </Router>
  );
}

export default App;

