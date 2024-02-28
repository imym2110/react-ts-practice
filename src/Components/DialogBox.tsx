import React from "react";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Ticket } from "../Model/ticket";

interface DialogBoxProps {
  open: any;
  handleCloseDialog: () => void;
  handleCloseButtonClick: (rowParams: Ticket) => void;
  rowParams: Ticket;
}

const DialogBox: React.FC<DialogBoxProps> = ({
  open,
  handleCloseDialog,
  handleCloseButtonClick,
  rowParams,
}) => {
  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      <DialogTitle sx={{ padding: "20px 40px " }}>
        {"Close this ticket?"}
      </DialogTitle>

      <DialogActions sx={{ justifyContent: "center" }}>
        <Button onClick={handleCloseDialog} sx={{ color: "#00897b" }}>
          Cancel
        </Button>
        <Button
          onClick={() => handleCloseButtonClick(rowParams)}
          sx={{ color: "#00897b" }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
