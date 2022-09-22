import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Button, Snackbar, CircularProgress } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { validatePassword } from "../utils/utils";
import { createUser } from "../services";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/actions/profileActions";

export default function Login({ setIsLoggedIn }) {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const [showSnack, setShowSnack] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const dipatch = useDispatch();

  const handleOnChange = (event) => {
    const { value, name } = event.target;
    // Task: Complete  validations
    if (name === "password") {
      const error = validatePassword(value);
      setErrors({ ...errors, [name]: error });
    }
    if (name === "confirm_password") {
      if (value !== formDetails.password) {
        setErrors({ ...errors, [name]: "Password is not matching" });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    }
    setFormDetails((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    // validation check

    setIsLoading(true);
    const data = {
      email: formDetails.email,
      password: formDetails.password,
    };

    createUser(data)
      .then((res) => {
        dipatch(setToken(res.token));

        setIsLoggedIn?.(true);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setFormDetails({
          ...formDetails,
          password: "",
          confirm_password: "",
        });
        setShowSnack("Something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required={true}
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formDetails.email}
            disabled={isLoading}
            onChange={handleOnChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText={errors.password}
            error={errors.password !== ""}
            value={formDetails.password}
            onChange={handleOnChange}
            disabled={isLoading}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirm_password"
            label="Confirm Password"
            type="password"
            id="confirm_password"
            helperText={errors.confirm_password}
            error={errors.confirm_password !== ""}
            value={formDetails.confirm_password}
            onChange={handleOnChange}
            disabled={isLoading}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : "Create User"}
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={Boolean(showSnack)}
        autoHideDuration={3000}
        onClose={() => {
          setShowSnack(false);
        }}
        message={showSnack}
      />
    </Container>
  );
}
