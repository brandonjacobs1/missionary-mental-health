// src/components/ContactPage.js
import React from "react";
import Calendar from "./Calendar";
import { Grid } from "@mui/material";

const CalendarPage = () => {
  return (
    <>
      <h1>CALENDAR</h1>
      <Grid sx={{ pl: "10%", pr: "10%" }}>
        <Calendar></Calendar>
      </Grid>
    </>
  );
};

export default CalendarPage;
