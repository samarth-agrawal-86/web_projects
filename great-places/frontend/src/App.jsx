import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import Users from "./pages/Users";
import NewPlace from "./pages/NewPlace";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/users" exact element={<Users />} />
        <Route path="/newplace" element={<NewPlace />} />
        <Route path="*" element={<Navigate to="/users" />} />
      </Routes>
    </Router>
  );
}

export default App;
