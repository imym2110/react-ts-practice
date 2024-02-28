import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store";
import styled from "@emotion/styled";
import { Alert } from "@mui/material";
import { useEffect } from "react";
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
      ) : null}
    </>
  );
};

export default AlertMessage;
