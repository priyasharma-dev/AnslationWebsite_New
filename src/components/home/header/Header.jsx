import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import { DarkMode, ArrowDropDown,Menu } from "@mui/icons-material";
import { Ellipse81 } from "../../../gradient/gradienttop";
const navItems = ["Products", "Solutions", "Resources"];
export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); 
  };

   const showBackground = mobileOpen || menuOpen; 

    return (
      <>
      {/* Show background only when the navbar or drawer is toggled */}
      {showBackground && (
        <>
          <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
          <Ellipse81 /> {/* Background is rendered behind the AppBar */}
         </Box>
        </>
      )}
       
        <AppBar
            position="static"
            sx={{
                background: "transparent",
                boxShadow: "none",
                zIndex: 10,
                px: { xs: 2, md: 6 },
                py: 2,
            }}
        >
            <Toolbar sx={{
               display: "flex",
                justifyContent: "space-between", 
                alignItems: "center",
                px:0,
                 }}>
                {/* Logo */}
                <Box sx= {{ 
                  display: "flex",
                 alignItems: "center",
                 flexShrink: 0,
                  ml: 0,
                  '& img': {
                  height: "auto",
                  width: { xs: "100px", md: "120px" },
                  maxWidth: "100%",
                      }
                 }}>
                    <img
                        src="./logo/logo.png"
                        alt="logo"
                    />
                </Box>

                {/* Nav Links */}
                <Box 
                sx={{
                     display: { xs: "none", md: "flex" },
                      gap: 3 ,
                      ml: 20,
                       flexGrow:1
                       }}>
                    {navItems.map((item) => (
                        <Button
                            key={item}
                            endIcon={<ArrowDropDown />}
                            sx={{ 
                                color: "white",
                                 textTransform: "none", 
                                 alignItems: "center",
                                  fontSize: "20px",
                                   backgroundColor: "transparent" , // Add transparent background when clicked
                                       transition: "background-color 0.3s ease", // Smooth transition for background color
                                       "&:hover": {
                                       backgroundColor: "transparent",
                                       },
                                 }}
                                  onClick={handleMenuToggle}
                        >
                            {item}
                        </Button>
                    ))}
                </Box>

                {/* Right actions */}
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                    <Button sx={{ color: "white", textTransform: "none", fontSize: "18px" }}>Join us</Button>
                    <Button
                        variant="outlined"
                        sx={{
                            color: "white",
                            borderColor: "white",
                            borderRadius: "9999px",
                            textTransform: "none",
                            fontSize: "16px",
                            "&:hover": {
                                 backgroundColor: "white",
                                  color: "#0A1929", 
                                },
                        }}
                    >
                        Contact
                    </Button>
                    <IconButton
                        sx={{
                            border: "1px solid white",
                            borderRadius: "9999px",
                            color: "white",
                            px: 2,
                            boxShadow: "0 0 20px #0B3BFF",
                            "&:hover": { boxShadow: "0 0 30px #0B3BFF" },
                        }}
                    >
                        <DarkMode fontSize="small" />
                        <Typography sx={{ ml: 1, fontSize: "1rem" }}>Dark</Typography>
                    </IconButton>
                </Box>
                 <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
            </Toolbar>
        </AppBar>
        {/* Mobile Drawer */}
      <Drawer anchor="right" 
      open={mobileOpen} 
      onClose={handleDrawerToggle}
      sx={{
        "& .MuiDrawer-paper": {
         backgroundColor: "transparent", // Set transparent background for the drawer
        boxShadow: "none",
        color: "white",
        },
  }}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem button key={item} sx={{ backgroundColor: "transparent", color: "white" }}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
            <ListItem button sx={{ backgroundColor: "transparent", color: "white" }}>Join us</ListItem>
            <ListItem button sx={{ backgroundColor: "transparent", color: "white" }}>Contact</ListItem>
          </List>
        </Box>
      </Drawer>
      </>
    );
}
    