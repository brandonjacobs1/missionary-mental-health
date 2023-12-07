import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Form from "./Form";
import CalendarPage from "./CalendarPage";
import Navbar from "./Navbar";
import OldApp from "./OldApp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Route path="/" element={<OldApp />} />
      </LocalizationProvider>
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
