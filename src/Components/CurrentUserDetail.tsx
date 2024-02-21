import React, { useEffect, useState } from "react";
import { RootState } from "../Store";
import { useSelector } from "react-redux";
import { User } from "../Store/Slices/UserSlice";
import { Box, Card, Typography } from "@mui/material";

const CurrentUserDetail = () => {
  const selector = useSelector((state: RootState) => state.userReducer);
  const userData = selector.currentUser;
  const [userObject, setUserObject] = useState<User>({
    user_id: 0,
    username: "",
    email: "",
    password: "",
    role: "",
    location: "",
  });

  useEffect(() => {
    if (userData?.username) {
      setUserObject(userData);
    }
  }, [userData]);
  return (
    <Box
      sx={{
        width: "calc(100vw-10px)",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Card
        elevation={5}
        sx={{
          backgroundColor: "#e8f5e9",
          display: "flex",
          flexDirection: "column",
          width: "220px",
          margin: "10px",
          padding: "10px",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          ID: {userObject.user_id}
        </Typography>
        <hr />
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          Role: {userObject.role}
        </Typography>
        <hr />
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          Name: {userObject.username}
        </Typography>
        <hr />
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          Email: {userObject.email}
        </Typography>
        <hr />
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          Location: {userObject.location}
        </Typography>
      </Card>
    </Box>
  );
};

export default CurrentUserDetail;
