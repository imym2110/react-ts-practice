import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ticketData from "../../jsonData/ticketData";
import { Ticket } from "../../Model/ticket";

interface TicketState {
  ticketData: Ticket[];
  modelOpen: boolean;
  cellValue: Ticket;
}

const initialState: TicketState = {
  ticketData: ticketData,
  modelOpen: false,
  cellValue: {
    ticket_id: "",
    username: "",
    severity: "Low",
    start_date: "",
    end_date: "",
    status: "Closed",
    description: "",
    location: "Vadodara",
  },
};

const TicketSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    toggleModel(state: TicketState, action: PayloadAction<boolean>) {
      state.modelOpen = action.payload;
    },
    changeStatus(state: TicketState, action: PayloadAction<Ticket>) {
      const { ticket_id } = action.payload;
      const ticketToUpdate = state.ticketData.find(
        (ticket: Ticket) => ticket.ticket_id === ticket_id,
      );
      if (ticketToUpdate) {
        ticketToUpdate.status =
          ticketToUpdate.status === "Open" ? "Closed" : "Closed";
      }
    },
    selectCellValue(state: TicketState, action: PayloadAction<Ticket>) {
      state.cellValue = action.payload;
    },
  },
});

export const { changeStatus, toggleModel, selectCellValue } =
  TicketSlice.actions;
export default TicketSlice.reducer;
