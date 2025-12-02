import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  Stack,
  Paper,
  IconButton,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { MessageCircle } from "lucide-react";
import instagram from "../../../assets/Instagram 2.png";
import linked from "../../../assets/LinkedIn 2.png";
import Twitter from "../../../assets/Twitter.png";
import youtube from "../../../assets/Youtube.png";
import fac from "../../../assets/Facebook 2.png";
import ChatSupport from "../footer/Footer_Services/Chat_Support/ChatSupport";
import { color } from "framer-motion";

export default function Footer() {
  const footerLinks = {
    product: [
      { label: "Ads-astra", href: "#" },
      { label: "Anslatíon tools", href: "#" },
      { label: "OS.Anslation", href: "#" },
      { label: "K-tech tool", href: "#" },
      { label: "Trackers", href: "#" },
    ],
    service: [
      { label: "Performance Analytics", href: "#" },
      { label: "Software Infrastructure", href: "#" },
      { label: "Marketing Automation", href: "#" },
      { label: "Chat support", href: "#" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Contact us", href: "/contact" },
      { label: "Careers", href: "/career" },
      { label: "Culture", href: "/culture" },
      { label: "Blog", href: "/blog" },
    ],
  };

  const socialIcons = [
    { src: fac, alt: "Facebook" },
    { src: instagram, alt: "Instagram" },
    { src: linked, alt: "LinkedIn" },
    { src: Twitter, alt: "Twitter" },
    { src: youtube, alt: "YouTube" },
  ];

  const [openChat, setOpenChat] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const [footerInView, setFooterInView] = useState(false);

  // Detect when footer is visible
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div >
      <Divider sx={{ borderColor: "rgba(255,255,255)" }} />

       <Box
      component="footer"
      sx={{
        width: "100%",
        background: "#000000",
        color: "#ffffff",
        pt: "60px",
        pb: "30px",
        px: "80px",
        fontFamily: "Helvetica Neue",
        display: "flex",
        justifyContent: "center",
      }}
    >
        <Container maxWidth="xl" sx={{ width: "1440px" }}>
          <Grid container spacing={20}>
    {/* Brand */}
    <Grid item xs={12} md={3}>
      <img
              src="/logo-white.svg"
              alt="logo"
              style={{ width: 85, marginBottom: 20 }}
            />
      <Typography sx={{ fontSize: "16px", lineHeight: 1.6, mb: 3 }}>
              Driven by Questions.
              <br />
              Delivered as Solutions.
            </Typography>

      {/* Social Icons */}
        {/* <Stack direction="row" spacing={2}>
      {socialIcons.map((icon, i) => (
        <Box
          key={i}
          sx={{
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15%",
            backgroundColor: "#1F2937",
            cursor: "pointer",
            transition: "transform 0.3s, background-color 0.3s",
            "&:hover": {
              transform: "scale(1.2)",
              backgroundColor: "#1F2937",
            },
          }}
        >
          <Box
            component="img"
            src={icon.src}
            alt={icon.alt}
            sx={{ width: 16, height: 16}}
          />
        </Box>
      ))}
    </Stack> */}


    <Stack direction="row" spacing={2}>
  {socialIcons.map((icon, i) => (
    <Box
      key={i}
      sx={{
        width: 32,
        height: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "15%",
        backgroundColor: "#1F2937",
        cursor: "pointer",
        transition: "all 0.35s ease",
        boxShadow: "0 0 0 rgba(0,0,0,0)",

        "&:hover": {
          transform: "scale(1.18)",
          background:
            icon.alt === "Facebook"
              ? "#1877F2"
              : icon.alt === "Instagram"
              ? "linear-gradient(45deg, #515BD4, #8134AF, #DD2A7B, #FEDA77, #F58529)"
              : icon.alt === "LinkedIn"
              ? "#0A66C2"
              : icon.alt === "Twitter"
              ? "#1DA1F2"
              : icon.alt === "YouTube"
              ? "#FF0000"
              : "#1F2937",
          boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
        },
      }}
    >
      <Box
        component="img"
        src={icon.src}
        alt={icon.alt}
        sx={{ width: 16, height: 16 }}
      />
    </Box>
  ))}
</Stack>

    </Grid>

    {/* Product */}
   <Grid item xs={6} md={2.25}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Product</Typography>
            <Stack spacing={1}>
              {["Ads-astra", "Anslatíon tools", "OS Anslation", "K-tech tool", "Trackers"].map((x) => (
                <Link key={x} underline="hover" color="#9DA3AF" sx={{ fontSize: "16px" }}>
                  {x}
                </Link>
              ))}
            </Stack>
          </Grid>


          

    {/* Service */}
    <Grid item xs={6} md={2.25}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Service</Typography>
            <Stack spacing={1}>
              {["Performance Analytics", "Software Infrastructure", "Marketing Automation", "Chat support"].map((x) => (
                <Link key={x} underline="hover" color="#9DA3AF" sx={{ fontSize: "16px" }}>
                  {x}
                </Link>
              ))}
            </Stack>
          </Grid>

    {/* Company */}
     <Grid item xs={6} md={2.25}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Company</Typography>
            <Stack spacing={1}>
              {["About", "Contact us", "Careers", "Culture", "Blog"].map((x) => (
                <Link key={x} underline="hover" color="#9DA3AF" sx={{ fontSize: "16px" }}>
                  {x}
                </Link>
              ))}
            </Stack>
          </Grid>



 <Grid item xs={6} md={2.25}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Contacts Us</Typography>
            <Stack spacing={1}>
              {[" we@anslation.com", " 012-345-6789", "Betul | Gurugram"].map((x) => (
                <Link key={x} underline="hover" color="#9DA3AF" sx={{ fontSize: "16px" }}>
                  {x}
                </Link>
              ))}
            </Stack>
          </Grid>










          {/* Contact */}
           {/* <Grid item xs={6} md={2.25}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Contacts us</Typography>
            <Stack spacing={1}>
              <Typography sx={{ fontSize: "14px", color: "#9DA3AF" }}>
                we@anslation.com
              </Typography>

              <Typography sx={{ fontSize: "14px", color:"#9DA3AF" }}>
                012-345-6789
              </Typography>

              <Typography sx={{ fontSize: "14px", color: "#9DA3AF"}}>
                Betul | Gurugram
              </Typography>
            </Stack>
          </Grid> */}
  </Grid>

  {/* Divider */}
  <Divider sx={{ borderColor: "rgba(255,255,255,0.18)", my: 4 }} />

  {/* Bottom Row */}
   <Stack
          direction="row"
          spacing={1.5}
          justifyContent="space-between"
          alignItems="center"
          sx={{ fontSize: "13px", color: "#d7d7d7" }}
        >
          <Typography>Copyright © 2025 Anslatíon. All Rights Resreved</Typography>

          <Stack direction="row" spacing={2}>
            <Link underline="hover" color="#d7d7d7">
              Terms and Conditions
            </Link>
            <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(255,255,255,0.4)" }} />
            <Link underline="hover" color="#d7d7d7">
              Privacy Policy
            </Link>
          </Stack>
        </Stack>
        </Container>

        {/* 💬 Floating Chat Icon + Text */}
        {footerInView && (
          <Box
            sx={{
              position: "fixed",
              bottom: { xs: 16, sm: 20, md: 25 },
              right: { xs: 16, sm: 20, md: 25 },
              zIndex: 3000,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            {showMessage && !openChat && (
              <Paper
                elevation={4}
                sx={{
                  background: "#1976d2",
                  color: "white",
                  px: { xs: 1.4, sm: 1.6, md: 2 },
                  py: { xs: 0.6, sm: 0.8, md: 1 },
                  borderRadius: "10px",
                  mb: 1,
                  fontSize: { xs: "11px", sm: "12px", md: "13px", lg: "14px" },
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                }}
              >
                💬 Need help? Talk to our bot!
              </Paper>
            )}

            <IconButton
              onClick={() => setOpenChat((prev) => !prev)}
              sx={{
                background: "#1976d2",
                color: "white",
                "&:hover": { background: "#1565c0" },
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              }}
            >
              <MessageCircle size={24} />
            </IconButton>
          </Box>
        )}

        {/* ✅ Chat Box */}
        {openChat && (
          <Box
            sx={{
              position: "fixed",
              bottom: 100,
              right: 30,
              zIndex: 9999,
              width: { xs: 300, sm: 360 },
              height: { xs: 400, sm: 450 },
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ChatSupport />
          </Box>
        )}
      </Box>

      
    </div>
  );
}
