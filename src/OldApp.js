import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Form from "./Form";

function OldApp() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Form></Form>
    </LocalizationProvider>
  );
}

export default OldApp;
