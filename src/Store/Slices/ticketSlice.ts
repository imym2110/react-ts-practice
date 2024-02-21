import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ticket } from "../../jsonData/ticketData";
import ticketData from "../../jsonData/ticketData";

const initialState: Ticket[] = ticketData;

const TicketSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    changeStatus(state, action: PayloadAction<Ticket>) {
      const { ticket_id } = action.payload;
      const ticketToUpdate = state.find(
        (ticket) => ticket.ticket_id === ticket_id,
      );
      if (ticketToUpdate) {
        ticketToUpdate.status =
          ticketToUpdate.status === "Open" ? "Closed" : "Closed";
      }
    },
  },
});

export const { changeStatus } = TicketSlice.actions;
export default TicketSlice.reducer;
