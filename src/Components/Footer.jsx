import React from "react";
import { Box, Typography, Link, Divider } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 4,
        textAlign: "center",
        bgcolor: "primary.main",
        color: "white",
      }}
    >
      {/* Project Name */}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        Brain Tumor Detection
      </Typography>

      {/* Divider */}
      <Divider sx={{ borderColor: "rgba(255,255,255,0.3)", mb: 2, mx: "auto", width: "50%" }} />

      {/* Navigation Links */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap", mb: 2 }}>
        <Link href="/" color="inherit" underline="hover">Dashboard</Link>
        <Link href="/about" color="inherit" underline="hover">About the Project</Link>
        <Link href="/how-it-works" color="inherit" underline="hover">AI Workflow</Link>
        <Link href="/admin" color="inherit" underline="hover">Admin Panel</Link>
      </Box>

      {/* Social Icons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
        <Link href="https://github.com/" target="_blank" color="inherit"><GitHubIcon /></Link>
        <Link href="https://linkedin.com/" target="_blank" color="inherit"><LinkedInIcon /></Link>
      </Box>

      {/* Copyright */}
      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        © {new Date().getFullYear()} Brain Tumor Detection — Powered by AI & Deep Learning
      </Typography>
    </Box>
  );
}

export default Footer;
