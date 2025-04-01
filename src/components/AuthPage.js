import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import "@fontsource/source-sans-pro"; 
import { SettingsPower } from "@mui/icons-material";

const primaryColor = "#001F54"; // Navy Blue
const secondaryColor = "#FFFFFF"; // White

export default function AuthPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [add, setAdd] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
   
    fetch("http://10.191.243.51:5000/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "name": name,
        "email": email,
        "password": pw,
        "address": add,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setName("");
        setEmail("");
        setPw("");
        setAdd("");
        nav("/home")
      })
      
  };
  const nav = useNavigate();
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {/* Left Section - Welcome Back (Navy Blue) */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: primaryColor,
          color: secondaryColor,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
        }}
      >
        <Box textAlign="center">
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ fontFamily: '"Source Sans Pro", sans-serif' }}
          >
            Welcome Back!
          </Typography>
          <Typography
            variant="body1"
            mb={4}
            sx={{ fontFamily: '"Source Sans Pro", sans-serif' }}
          >
            To keep connected with us please login with your personal info
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: secondaryColor,
              borderColor: secondaryColor,
              borderRadius: "30px",
              paddingX: 4,
              paddingY: 1,
              ":hover": { backgroundColor: "#00337F" },
              fontFamily: '"Source Sans Pro", sans-serif',
            }}
            onClick={() => {nav("/SignIn")}}
          >
            SIGN IN
          </Button>
        </Box>
      </Grid>

      {/* Right Section - Create Account (White) */}
      <Grid
        item
        xs={12}
        md={6}
        component={Paper}
        elevation={6}
        square
        sx={{
          backgroundColor: secondaryColor,
          color: primaryColor,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
        }}
      >
        <Box width="100%" maxWidth="400px" textAlign="center">
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            sx={{ fontFamily: '"Source Sans Pro", sans-serif' }}
          >
            Create Account
          </Typography>
          <Typography
            variant="body2"
            mb={2}
            sx={{ fontFamily: '"Source Sans Pro", sans-serif' }}
          >
            Use your email for registration:
          </Typography>
          <Box component="form" noValidate autoComplete="off" display="grid" gap={2}>


             <TextField
              label="Name"
              fullWidth
              variant="outlined"
              size="small"
              onChange={(e) => setName(e.target.value)}
                required
              InputLabelProps={{
                style: { fontFamily: '"Source Sans Pro", sans-serif', color: primaryColor },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: primaryColor },
                  "&:hover fieldset": { borderColor: "#00337F" },
                  "&.Mui-focused fieldset": { borderColor: "#00337F" },
                },
                input: { color: primaryColor },
              }}
            />
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              size="small"
              onChange={(e) => setEmail(e.target.value)}
                required
              InputLabelProps={{
                style: { fontFamily: '"Source Sans Pro", sans-serif', color: primaryColor },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: primaryColor },
                  "&:hover fieldset": { borderColor: "#00337F" },
                  "&.Mui-focused fieldset": { borderColor: "#00337F" },
                },
                input: { color: primaryColor },
              }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              size="small"
              onChange={(e) => setPw(e.target.value)}
                required
              InputLabelProps={{
                style: { fontFamily: '"Source Sans Pro", sans-serif', color: primaryColor },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: primaryColor },
                  "&:hover fieldset": { borderColor: "#00337F" },
                  "&.Mui-focused fieldset": { borderColor: "#00337F" },
                },
                input: { color: primaryColor },
              }}
            />
            
            <TextField
              label="Address"
              fullWidth
              variant="outlined"
              size="small"
              onChange={(e) => setAdd(e.target.value)}
                required
              InputLabelProps={{
                style: { fontFamily: '"Source Sans Pro", sans-serif', color: primaryColor },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: primaryColor },
                  "&:hover fieldset": { borderColor: "#00337F" },
                  "&.Mui-focused fieldset": { borderColor: "#00337F" },
                },
                input: { color: primaryColor },
              }}
            />
            <Button onClick={handleSubmit}
              variant="contained"
              
              fullWidth
              sx={{
                backgroundColor: primaryColor,
                color: secondaryColor,
                borderRadius: "30px",
                paddingY: 1,
                ":hover": { backgroundColor: "#00337F" },
                fontFamily: '"Source Sans Pro", sans-serif',
              }}
           
            >
              SIGN UP
            </Button>
          
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}