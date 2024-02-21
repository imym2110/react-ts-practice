import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store";
import styled from "@emotion/styled";
import { Alert } from "@mui/material";
import { useEffect } from "react";
import { UseDispatch } from "react-redux";
import { removeAlert } from "../Store/Slices/alertSlice";

const AlertWrapper = styled(Alert)({
  position: "absolute",
  width: "350px",
  height: "50px",
  top: "20px",
  right: "100px",
});

const AlertMessage = () => {
  const dispatch = useDispatch();
  // console.log("alert");
  const alert = useSelector((state: RootState) => state.alertReducer);

  useEffect(() => {
    if (alert.alertStatus) {
      setTimeout(() => {
        dispatch(removeAlert());
      }, 2000);
    }
  }, [alert, dispatch]);
  return (
    <>
      {alert.alertStatus ? (
        <AlertWrapper severity="error">{alert.content}</AlertWrapper>
      ) : (
        ""
      )}
    </>
  );
};

export default AlertMessage;
