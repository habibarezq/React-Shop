import React from "react";
import WaveBg from "./WaveBg"; // Import the wave component
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Typography, TextField } from "@mui/material";
import "../styles/navbar.css"; // Import CSS for styling
import "@fontsource/source-sans-pro";
import SearchBar from "./SearchBar";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
const NavBar = () => {
    return (
        <div style={{ position: "relative", width: "100%", height: "auto" }}>
            <WaveBg />
            <div className="nav-content">
                <Typography variant="h5" className="nav-title" sx={{ fontFamily: '"Source Sans Pro", sans-serif', fontSize: 30, fontWeight: "bold" }}                >
                    SameTag
                </Typography>
                <Link to="/cart" className="cart-link">
                <ShoppingCartRoundedIcon className="shopping-cart-icon" />
                </Link>
                <Link to="/home" className="home-link">
                <HomeRoundedIcon className="home-icon" />
                </Link>
                <Link to="/add-product" className="add-product-link">
                <AddRoundedIcon className="add-icon" />
                </Link>
                <Link to="/" className="logout-link">
                <LogoutRoundedIcon className="logout-icon" />    
                </Link>
                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        height: "80px", // Adjust based on your navbar height
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <SearchBar />
                </Box>
            </div>
        </div>

    );
};

export default NavBar;