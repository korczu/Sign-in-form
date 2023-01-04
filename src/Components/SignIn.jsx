import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";

function SignIn({ onSubmit, handleRememberMe }) {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const username = data.get("username");
    const password = data.get("password");
    if (typeof onSubmit === "function") return onSubmit({ username, password });
    throw new Error("onSubmit isn't function");
  }
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        wordBreak: "break-all",
      }}
    >
      <LockOpenIcon />
      <Typography component="h1" variant="h4">
        Sign in
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          margin="normal"
          id="username"
          label="Username"
          name="username"
          variant="outlined"
          autoFocus
          required
        />
        <TextField
          margin="normal"
          id="password"
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          autoFocus
          required
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Remember me"
          onChange={handleRememberMe}
        />
        <Button type="submit" variant="contained">
          submit
        </Button>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Link underline="none" href="#">
            Reset password
          </Link>
          <Link underline="none" href="#">
            Create account
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default SignIn;
