import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Form from "./Form";
import Calendar from "./Calendar";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <Form></Form> */}
      <Calendar></Calendar>
    </LocalizationProvider>
  );
}

export default App;
