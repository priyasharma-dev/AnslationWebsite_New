import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  Stack,
  IconButton,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";


export default function Footer() {
  return (
    <Box
    component="footer"
      sx={{
        width: "100%",
        bgcolor: "transparent",
        // background: "linear-gradient(to bottom, #0a0a0f, #00103a)",
        color: "white",
        py: { xs: 6, sm: 8 },
         px: { xs: 2, sm: 4 },
        mt: "auto",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      }}
    >
      <Container maxWidth="xl">
        {/* IMPORTANT: remove space-between so the right side isn't forced to the edge */}
        <Grid
         container
         spacing={{ xs: 3,sm:4, md: 6,}}
          alignItems="flex-start"
           justifyContent= "space-between"
    
          >
               {/* LEFT SIDE - Brand */}
              <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography 
               fontSize={{xs:26,sm:30,md:34}}
              fontWeight={600} 
             mb={2}
             >
              Anslatíon
            </Typography>
            <Typography 
            fontSize={{xs:15,sm:16}}
             mb={3} 
             lineHeight={1.6}>
              Driven by Questions.
              <br />
              Delivered as Solutions
            </Typography>

            <Stack direction="row" spacing={1.5} flexWrap="wrap">
              <IconButton aria-label="Facebook" href="#" sx={{ color: "white" }}>
                <i className="fab fa-facebook-f" />
              </IconButton>
              <IconButton aria-label="Twitter" href="#" sx={{ color: "white" }}>
                <i className="fab fa-twitter" />
              </IconButton>
              <IconButton aria-label="Instagram" href="#" sx={{ color: "white" }}>
                <i className="fab fa-instagram" />
              </IconButton>
              <IconButton aria-label="LinkedIn" href="#" sx={{ color: "white" }}>
                <i className="fab fa-linkedin-in" />
              </IconButton>
              <IconButton aria-label="YouTube" href="#" sx={{ color: "white" }}>
                <i className="fab fa-youtube" />
              </IconButton>
            </Stack>
          </Grid>

          {/* RIGHT SIDE - 4 columns */}
          {/* Small left shift with negative margin if you want it a bit closer */}
         
           <Grid item xs={12} sm={12} md={8} lg={8} sx={{ pl: 0, pr: 0, mx: 0 }}>
            <Grid 
            container
              columnSpacing={{ xs:1.5, sm: 2, md: 6 }}   // ← control desktop gap here
              rowSpacing={{ xs: 2, sm: 3 }} 
             justifyContent="flex-start"
             alignItems="flex-start"
             >
              {/* Product */}
              <Grid item xs={6} sm={4} md={3} lg={3}>
                <Typography
                 fontSize={{ xs: 18, sm: 20 }} 
                 fontWeight={700}
                  mb={2}>
                  Product
                </Typography>
                <Stack spacing={1}>
                  <Link href="#" color="inherit" fontSize={{xs:14,sm:16}} underline="hover">Ads-astra</Link>
                  <Link href="#" color="inherit" fontSize={{xs:14,sm:16}} underline="hover">Anslatíon tools</Link>
                  <Link href="#" color="inherit" fontSize={{xs:14,sm:16}} underline="hover">OS.Anslation</Link>
                  <Link href="#" color="inherit" fontSize={{xs:14,sm:16}} underline="hover">K-tech tool</Link>
                  <Link href="#" color="inherit" fontSize={{xs:14,sm:16}} underline="hover">Trackers</Link>
                </Stack>
              </Grid>

              {/* Service */}
              <Grid item xs={6} sm={4} md={3} lg={3} >
                <Typography 
                fontSize={{ xs: 18, sm: 20 }}
                 fontWeight={700} 
                 mb={2}>
                  Service
                </Typography>
                <Stack spacing={1}>
                  <Link href="#" color="inherit" fontSize={{xs:14,sm:16}} underline="hover">Performance Analytics</Link>
                  <Link href="#" color="inherit" fontSize={{xs:14,sm:16}} underline="hover">Software Infrastructure</Link>
                  <Link href="#" color="inherit" fontSize={{xs:14,sm:16}} underline="hover">Marketing Automation</Link>
                  <Link href="#" color="inherit" fontSize={{xs:14,sm:16}} underline="hover">Chat support</Link>
                </Stack>
              </Grid>

              {/* Company */}
              <Grid item xs={6} sm={4} md={3} lg={3} >
                <Typography
                 fontSize={{xs:18,sm:20}} 
                fontWeight={700} 
                mb={2}
                >
                  Company
                </Typography>
                <Stack spacing={1}>
               <Link
                component={RouterLink}
                to="/about"
                color="inherit"
                fontSize={{ xs: 14, sm: 16 }}
                underline="hover"
                >
               About
              </Link>          
                <Link href="#" color="inherit" fontSize={{ xs: 14, sm: 16 }} underline="hover">Contact us</Link>
                  <Link href="#" color="inherit" fontSize={{ xs: 14, sm: 16 }} underline="hover">Careers</Link>
                  <Link href="#" color="inherit" fontSize={{ xs: 14, sm: 16 }} underline="hover">Culture</Link>
                  <Link href="#" color="inherit" fontSize={{ xs: 14, sm: 16 }} underline="hover">Blog</Link>
                </Stack>
              </Grid>

              {/* Contact */}
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <Typography fontSize={{ xs: 18, sm: 20 }} fontWeight={700} mb={2}>
                  Contact us
                </Typography>
                <Stack spacing={1.5}>
                  <Stack direction="row"  spacing={1} alignItems="center">
                    <Email fontSize="small" />
                    <Typography fontSize={{ xs: 14, sm: 16 }}>Help@anslation.com</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Phone fontSize="small" />
                    <Typography fontSize={{ xs: 14, sm: 16 }}>(414) 687 - 5892</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <LocationOn fontSize="small" />
                    <Typography fontSize={{ xs: 14, sm: 16 }}>Betul | Gurugram</Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.3)", my: { xs: 4, sm: 6 } }} />

        {/* Bottom Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "center" },
            fontSize:{ xs: "0.875rem", sm: "0.95rem" },
            fontWeight: 400,
            color: "rgba(255,255,255,0.85)",
            gap: { xs: 2, sm: 1 },
            textAlign: { xs: "center", sm: "left" },
            flexWrap: "wrap",
          }}
        >
          <Typography fontSize={{xs:16,sm:20}}>Copyright © 2025</Typography>
          <Stack
           sx={{
              fontSize: { xs: 14, sm: 15,md:16 },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "center" },
              gap: { xs: 1, sm: 2 },
               flexWrap: { xs: "wrap", sm: "nowrap" }, // added to prevent overflow on small screens
              justifyContent: { xs: "center", sm: "flex-end" },
               whiteSpace: { xs: "normal", sm: "nowrap" },
                minWidth: 0,
            }}
          >
          <Typography component="span" noWrap sx={{ flexShrink: 0 }}>  All Rights Reserved {" "}</Typography>
            <Box
            component="span"
             sx={{ display: { xs: "none", sm: "inline" }, opacity: 0.6 }}
             >
              {" "}  | {" "}
             </Box>
            <Link href="#" underline="hover" fontSize={{xs:14,sm:18}} color="inherit">Terms and Conditions</Link>
             <Box
      component="span"
      sx={{ display: { xs: "none", sm: "inline" }, opacity: 0.6 }}
    >
      |
    </Box>

            <Link href="#" underline="hover" fontSize={{xs:14,sm:18}} color="inherit">Privacy Policy</Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
