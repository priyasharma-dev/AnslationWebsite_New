import React from "react";
import { Box } from "@mui/material";
import Header from "../components/home/header/Header";
import Hero from "../components/home/hero/Hero";
import Svg from "../components/home/exploresvg/Svg";
import Always from "../components/home/stayupdate/Always";
import { Ellipse81, Ellipse82, Rectangle82, Rectangle83 } from "../gradient/gradienttop";
import Footer from "../components/home/footer/Footer";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative", 
        overflow: "hidden",
      }}
    >
      <Hero />
      <Svg />
    </Box>
  );
}

export default Home;
