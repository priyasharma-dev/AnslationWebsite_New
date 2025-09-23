import React from "react";
import { Box } from "@mui/material";
import Header from "./components/home/header/Header";
import Hero from "./components/home/Hero";
import Svg from "./components/home/header/Svg";
import Always from "./components/home/Always";
import Footer from "./components/home/header/Footer";
import { Ellipse81 } from "./gradient/gradienttop";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        color: "white",
        fontFamily: "sans-serif",
        background: "black",
        position: "relative", // 🔑 important so absolute children are anchored
        overflow: "hidden",
      }}
    >
      {/* Background gradient */}
      <Ellipse81 />

      {/* Content */}
      <Header />
      <Hero />
      <Svg />
      <Always />
      <Footer />
    </Box>
  );
}

export default App;
