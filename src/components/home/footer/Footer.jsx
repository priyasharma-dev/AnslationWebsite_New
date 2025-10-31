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
import instagram from "../../../assets/Instagram 2.png";
import linked from "../../../assets/LinkedIn 2.png";
import Twitter from "../../../assets/Twitter.png";
import youtube from "../../../assets/Youtube.png";
import fac from "../../../assets/Facebook 2.png";

// ✅ Import your Chat Support here
import ChatSupport from "../footer/Footer_Services/Chat_Support/ChatSupport";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "transparent",
        background: "linear-gradient(to bottom, #0a0a0f, #00103a)",
        color: "white",
        py: { xs: 6, sm: 8 },
        px: { xs: 2, sm: 4, md: 10, lg: 14 },
        mt: "auto",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        position: "relative",
      }}
    >
      <Divider
        sx={{ borderColor: "rgba(255,255,255)", pt: { md: 2, lg: 3 } }}
      />
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
        <Grid
          container
          spacing={{ xs: 3, sm: 5, md: 6 }}
          alignItems="flex-start"
          justifyContent="flex-start"
          direction={{ xs: "column", sm: "column", md: "row" }}
          className="px-4"
        >
          {/* LEFT SIDE - Brand */}
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={3}
            sx={{
              mt: { xs: 1, md: 2, lg: 4 },
            }}
          >
            <Typography
              fontSize={{ xs: 26, sm: 30, md: 34 }}
              component="h2"
              fontWeight={600}
              mb={{ xs: 1.5, md: 2 }}
            >
              Anslatíon
            </Typography>
            <Typography
              fontSize={{ xs: 15, sm: 16 }}
              mb={{ xs: 1, sm: 1.25, md: 1.5 }}
              lineHeight={1.6}
            >
              Driven by Questions.
              <br />
              Delivered as Solutions
            </Typography>
            <div className="flex mb-4 gap-2">
              <img src={fac} alt="fac" className="w-5 h-5" />
              <img src={instagram} alt="instgram" className="w-5 h-5" />
              <img src={linked} alt="linked" className="w-5 h-5" />
              <img src={Twitter} alt="twitter" className="w-5 h-5" />
              <img src={youtube} alt="youtube" className="w-5 h-5" />
            </div>
          </Grid>

          {/* RIGHT SIDE - Links */}
          <Grid item xs={12} md={8} lg={8} sx={{ pl: 0, pr: 0, mx: 0 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(2, minmax(0, 1fr))",
                  md: "repeat(4, minmax(0, 1fr))",
                },
                gap: { xs: 2, sm: 3, md: 4 },
                mt: 2,
              }}
            >
              {/* Product */}
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  fontSize={{ xs: 18, sm: 20, md: 22 }}
                  fontWeight={700}
                  mb={{ xs: 1, sm: 1.5 }}
                >
                  Product
                </Typography>
                <Stack spacing={{ xs: 0.6, sm: 1, md: 1.4, lg: 2 }}>
                  <Link
                    href="#"
                    color="inherit"
                    fontSize={{ xs: 16, sm: 17, md: 18 }}
                    underline="hover"
                  >
                    Ads-astra
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    fontSize={{ xs: 16, sm: 17, md: 18 }}
                    underline="hover"
                  >
                    Anslatíon tools
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    fontSize={{ xs: 16, sm: 17, md: 18 }}
                    underline="hover"
                  >
                    OS.Anslation
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    fontSize={{ xs: 16, sm: 17, md: 18 }}
                    underline="hover"
                  >
                    K-tech tool
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    fontSize={{ xs: 16, sm: 17, md: 18 }}
                    underline="hover"
                  >
                    Trackers
                  </Link>
                </Stack>
              </Box>

              {/* Service */}
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  fontSize={{ xs: 18, sm: 20, md: 22 }}
                  fontWeight={700}
                  mb={{ xs: 1, sm: 1.5 }}
                >
                  Service
                </Typography>
                <Stack spacing={{ xs: 0.6, sm: 1, md: 1.4, lg: 2 }}>
                  <Link
                    href="#"
                    color="inherit"
                    fontSize={{ xs: 16, sm: 17, md: 18 }}
                    underline="hover"
                  >
                    Performance Analytics
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    fontSize={{ xs: 16, sm: 17, md: 18 }}
                    underline="hover"
                  >
                    Software Infrastructure
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    fontSize={{ xs: 16, sm: 17, md: 18 }}
                    underline="hover"
                  >
                    Marketing Automation
                  </Link>
                  {/* 🔥 Chat Support opens here directly */}
                  <Link
                    href="#"
                    color="inherit"
                    fontSize={{ xs: 16, sm: 17, md: 18 }}
                    underline="hover"
                  >
                    Chat Support
                  </Link>
                </Stack>
              </Box>

              {/* Company */}
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  fontSize={{ xs: 18, sm: 20, md: 22 }}
                  fontWeight={700}
                  mb={{ xs: 1, sm: 1.5 }}
                >
                  Company
                </Typography>
                <Stack spacing={{ xs: 0.6, sm: 1, md: 1.4, lg: 2 }}>
                  <Link
                    href="/about"
                    color="inherit"
                    fontSize={{ xs: 16, sm: 17, md: 18 }}
                    underline="hover"
                  >
                    About
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    fontSize={{ xs: 16, sm: 17, md: 18 }}
                    underline="hover"
                  >
                    Contact us
                  </Link>
                  <Link
                    href="/career"
                    color="inherit"
                    fontSize={{ xs: 16, sm: 17, md: 18 }}
                    underline="hover"
                  >
                    Careers
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    fontSize={{ xs: 16, sm: 17, md: 18 }}
                    underline="hover"
                  >
                    Culture
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    fontSize={{ xs: 16, sm: 17, md: 18 }}
                    underline="hover"
                  >
                    Blog
                  </Link>
                </Stack>
              </Box>

              {/* Contact */}
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  fontSize={{ xs: 18, sm: 20, md: 22 }}
                  fontWeight={700}
                  mb={{ xs: 1, sm: 1.5 }}
                >
                  Contact us
                </Typography>
                <Stack spacing={{ xs: 0.6, sm: 1, md: 1.4, lg: 2 }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Email fontSize="small" />
                    <Typography fontSize={{ xs: 16, sm: 17, md: 18 }}>
                      Help@anslation.com
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Phone fontSize="small" />
                    <Typography fontSize={{ xs: 16, sm: 17, md: 18 }}>
                      (414) 687 - 5892
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <LocationOn fontSize="small" />
                    <Typography fontSize={{ xs: 16, sm: 17, md: 18 }}>
                      Betul | Gurugram
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider
          sx={{
            borderColor: "rgba(255,255,255,0.3)",
            my: { xs: 3.5, sm: 5, md: 6 },
          }}
        />

        {/* Bottom Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "center" },
            fontSize: { xs: "0.875rem", sm: "0.95rem" },
            fontWeight: 400,
            color: "rgba(255,255,255,0.85)",
            gap: { xs: 2, sm: 1 },
            textAlign: { xs: "center", sm: "left" },
            flexWrap: "wrap",
          }}
        >
          <Typography fontSize={{ xs: 16, sm: 20 }}>
            Copyright © 2025
          </Typography>
          <Stack
            sx={{
              fontSize: { xs: 14, sm: 15, md: 16 },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "center" },
              gap: { xs: 1, sm: 2 },
              justifyContent: { xs: "center", sm: "flex-end" },
            }}
          >
            <Typography component="span" noWrap sx={{ flexShrink: 0 }}>
              All Rights Reserved
            </Typography>
            <Box
              component="span"
              sx={{ display: { xs: "none", sm: "inline" }, opacity: 0.6 }}
            >
              {" | "}
            </Box>
            <Link href="#" underline="hover" color="inherit">
              Terms and Conditions
            </Link>
            <Box
              component="span"
              sx={{ display: { xs: "none", sm: "inline" }, opacity: 0.6 }}
            >
              {" | "}
            </Box>
            <Link href="#" underline="hover" color="inherit">
              Privacy Policy
            </Link>
          </Stack>
        </Box>
      </Container>

      {/* ✅ Chat Support integrated here (visible on all pages) */}
      <ChatSupport />
    </Box>
  );
}
