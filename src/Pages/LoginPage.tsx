import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import userData from "../jsonData/userData";
import { loginUser } from "../Store/Slices/UserSlice";
import { setAlert } from "../Store/Slices/alertSlice";
import AlertMessage from "../Components/AlertMessage";
import { AppDispatch } from "../Store";

type FormValues = {
  username: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    let isUserFound = false;
    userData.map((user) => {
      if (user.username === data.username && user.password === data.password) {
        isUserFound = true;
        navigate("/dashboard");
        dispatch(loginUser(user));
      }
    });

    if (!isUserFound) {
      dispatch(
        setAlert({
          content: "Invalid username or password",
          severity: "error",
        }),
      );
    }
  };

  const validatePassword = (value: string) => {
    if (value.length < 8) {
      return "Password must be at least 8 characters long";
    }
    return true;
  };

  return (
    <>
      <AlertMessage />
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "white" }}>
              <img
                src="https://my.v2solutions.com/assets/images/logo-img.png"
                alt="logo"
              />
            </Avatar>
            <Typography variant="h5">Sign in</Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                margin="normal"
                fullWidth
                id="username"
                label="Username"
                {...register("username", {
                  required: {
                    value: true,
                    message: "Username is required",
                  },
                })}
                error={!!errors.username}
                helperText={errors.username ? errors.username.message : ""}
              />
              <TextField
                margin="normal"
                fullWidth
                id="password"
                label="Password"
                type="password"
                {...register("password", {
                  required: "password is required",
                  validate: validatePassword,
                })}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPage;
