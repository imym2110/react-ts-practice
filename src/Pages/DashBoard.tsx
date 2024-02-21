import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Store";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import { Ticket } from "../jsonData/ticketData";
import { useNavigate } from "react-router-dom";
import { TaskAlt } from "@mui/icons-material";
import DialogBox from "../Components/DialogBox";
import CurrentUserDetail from "../Components/CurrentUserDetail";

const DashBoard: React.FC = () => {
  const navigate = useNavigate();
  const [rowParams, setRowParams] = useState<Ticket>({
    ticket_id: "",
    username: "",
    severity: "Low",
    start_date: "",
    end_date: "",
    status: "Closed",
    description: "",
    location: "Vadodara",
  });
  const ticketSelector = useSelector((state: RootState) => state.ticketReducer);
  const selector = useSelector((state: RootState) => state.userReducer);
  const userData = selector.currentUser;

  const rows = ticketSelector.map((item) => item);

  // For No ticket logged
  // const rows: Array<Ticket> = [];

  const [open, setOpen] = useState(false);

  const handleOpenDialog = (row: Ticket) => {
    setRowParams(row);
    setOpen(true);
  };

  const columns: GridColDef[] = [
    {
      field: "ticket_id",
      sortable: false,
      headerName: "Ticket ID",
      width: 120,
    },
    {
      field: "username",
      sortable: false,
      headerName: "User name",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      filterable: false,
    },
    {
      field: "severity",
      headerName: "Severity",
      width: 120,
      filterable: false,
    },
    {
      field: "start_date",
      headerName: "Date",
      width: 120,
      filterable: false,
    },
    {
      field: "action",
      filterable: false,
      headerName: "Action",
      sortable: false,
      width: 110,
      renderCell: (params) => {
        return (
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleOpenDialog(params.row);
            }}
            sx={{ color: "#00897b" }}
            endIcon={<TaskAlt />}
          >
            Close
          </Button>
        );
      },
    },
  ];

  let isAdmin = false;
  if (userData?.role === "admin") {
    isAdmin = true;
  }

  const filterColumns = (columns: any, isAdmin: boolean) => {
    if (!isAdmin) {
      return columns.filter(
        (column: { field: string }) => column.field !== "action",
      );
    }
    return columns;
  };

  const filteredColumns = filterColumns(columns, isAdmin);
  const numColumns = filteredColumns.length;
  const boxWidth = `${numColumns * 130}px`;

  const getRowId = (row: Ticket): GridRowId => row.ticket_id;

  return (
    <>
      <CurrentUserDetail />
      {rows.length === 0 ? (
        <Box sx={{ textAlign: "center", marginTop: 2 }}>
          <Typography variant="h1">No tickets Logged</Typography>
        </Box>
      ) : (
        <Box
          sx={{
            height: "371px",
            width: boxWidth,
            margin: "auto",
          }}
        >
          <DataGrid
            onRowClick={(e) => {
              navigate(`/ticket/${e.row.ticket_id}`);
            }}
            rows={rows}
            columns={filteredColumns}
            getRowId={getRowId}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5, 10]}
          />

          <DialogBox
            rowParams={rowParams}
            open={open}
            handleCloseDialog={() => {
              setOpen(false);
            }}
            handleCloseButtonClick={(row: Ticket) => {
              const status = row.status === "Open" ? "closed" : row.status;
              setOpen(false);
              console.log("TicketData", row);
              console.log("Status:", status);
            }}
          />
        </Box>
      )}
    </>
  );
};

export default DashBoard;
