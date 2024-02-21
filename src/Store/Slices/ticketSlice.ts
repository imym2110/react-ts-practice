import { createSlice } from "@reduxjs/toolkit";
import { Ticket } from "../../jsonData/ticketData";
import ticketData from "../../jsonData/ticketData";

const initialState: Ticket[] = ticketData;

const TicketSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
});

export default TicketSlice.reducer;
