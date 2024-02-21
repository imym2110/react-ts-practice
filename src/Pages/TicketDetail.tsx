import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../Store";
import { Paper, Typography } from "@mui/material";
import Logout from "../Components/Logout";

const TicketDetail = () => {
  const selector = useSelector((state: RootState) => state.ticketReducer);
  let { id } = useParams();
  // console.log(id);

  const ticketDetail = selector.map((item) => item);

  const specificTicketDetail = ticketDetail.find(
    (ticket) => ticket.ticket_id === id,
  );
  // console.log(specificTicketDetail);

  return (
    <>
      <Logout />
      <Paper
        elevation={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          margin: "100px auto",
          padding: "40px",
          backgroundColor: "#e0f2f1",
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          Ticket-ID: {specificTicketDetail?.ticket_id}
        </Typography>
        <hr />
        <Typography variant="subtitle1" fontWeight={700}>
          Name : {specificTicketDetail?.username}
        </Typography>
        <hr />
        <Typography variant="subtitle2" fontWeight={600}>
          start-date : {specificTicketDetail?.start_date}
        </Typography>
        <Typography variant="subtitle2" fontWeight={600}>
          end-date : {specificTicketDetail?.end_date}
        </Typography>
        <hr />
        <Typography variant="body1" fontWeight={500}>
          Description: {specificTicketDetail?.description}
        </Typography>
        <hr />
        <Typography variant="body1" fontWeight={600}>
          Location: {specificTicketDetail?.location}
        </Typography>
        <hr />
        <Typography variant="body1" fontWeight={600}>
          Severity : {specificTicketDetail?.severity}
        </Typography>
      </Paper>
    </>
  );
};

export default TicketDetail;
