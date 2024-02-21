import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Store/Slices/UserSlice";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    navigate("/login");
    dispatch(logoutUser());
  };
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
      <Button
        variant="contained"
        color="error"
        onClick={handleLogout}
        sx={{ margin: "10px" }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Logout;
