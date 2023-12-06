import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Form from "./Form";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Form></Form>
    </LocalizationProvider>
  );
}

export default App;
