import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { TaskAlt } from "@mui/icons-material";
import DialogBox from "../Components/DialogBox";
import Logout from "../Components/Logout";
import {
  changeStatus,
  selectCellValue,
  toggleModel,
} from "../Store/Slices/ticketSlice";
import { Ticket } from "../Model/ticket";

const DashBoard: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const rows = useSelector((state: RootState) => state.ticketReducer);
  const userSelector = useSelector((state: RootState) => state.userReducer);
  const userData = userSelector.currentUser;

  enum role {
    admin = "admin",
    user = "user",
  }

  // For No ticket logged
  // const rows: Array<Ticket> = [];

  const handleOpenDialog = (row: Ticket) => {
    dispatch(selectCellValue(row));
    dispatch(toggleModel(true));
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
  if (userData?.role === role.admin) {
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
  const boxWidth = { xs: `${numColumns * 80}px`, sm: `${numColumns * 130}px` };

  const getRowId = (row: Ticket): GridRowId => row.ticket_id;

  return (
    <>
      <Logout />
      {rows.ticketData.length === 0 ? (
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
            rows={rows.ticketData}
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
            rowParams={rows.cellValue}
            open={rows.modelOpen}
            handleCloseDialog={() => {
              dispatch(toggleModel(false));
            }}
            handleCloseButtonClick={(row: Ticket) => {
              const status = row.status === "Open" ? "Closed" : "Closed";
              dispatch(toggleModel(false));
              dispatch(changeStatus(row));
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
