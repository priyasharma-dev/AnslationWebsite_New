// gradient/gradienttop.js
import React from "react";
import { Box } from "@mui/material";

export function Ellipse81() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "2038px",
        height: "1509px",
        left: "50%",
        top: "-800px",
        transform: "translateX(-50%)",
        background:
          "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0, 81, 255, 0.48) 49.04%, rgba(0, 111, 255, 0) 100%)",
        opacity: 0.4,
        filter: "blur(37.2px)",
        zIndex: 0, // stay behind content
      }}
    />
  );
}
