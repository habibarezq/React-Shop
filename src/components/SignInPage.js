import React from "react";
import { Box, Grid, Typography, TextField, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/SignInPage.css";
import { useState } from "react";

export default function SignInPage() {

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pw, "g");
    fetch("http://10.191.243.51:5000/api/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({

        "email": email,
        "password": pw,

      }),
    })
      .then((response) => response.json())
      .then((data) => {

        localStorage.setItem("authToken", data["access-token"]); 
   
        nav("/home")
      })

  };
  const nav = useNavigate();
  return (
    <Grid container component="main" className="auth-container">
      <Grid item xs={12} md={6} component={Paper} elevation={6} square className="left-section">
        <Box width="100%" maxWidth="400px" textAlign="center">
          <Typography variant="h5" fontWeight="bold" gutterBottom className="heading">
            Sign In
          </Typography>
          <Typography variant="body2" mb={2} className="description">
            Enter your credentials to access your account:
          </Typography>
          <Box component="form" noValidate autoComplete="off" className="form">
            <TextField label="Email" fullWidth size="small" className="input-field"
              onChange={(e) => setEmail(e.target.value)}
              required />
            <TextField label="Password" type="password" fullWidth size="small" className="input-field"
              onChange={(e) => setPw(e.target.value)}
              required/>
            <Button onClick={handleSubmit}
              variant="contained" fullWidth className="submit-button">
              SIGN IN
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} className="right-section">
        <Box textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom className="heading">
            Welcome Back To Your Account!
          </Typography>

        </Box>
      </Grid>
    </Grid>
  );
}