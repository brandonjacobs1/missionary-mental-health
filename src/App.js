import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CalendarPage from "./CalendarPage";
import Navbar from "./Navbar";
import OldApp from "./OldApp";

function App() {
  return (
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<OldApp />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
