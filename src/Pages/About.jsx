import React from "react";
import {
  Typography,
  Container,
  Card,
  CardContent,
  Divider,
  Box,
} from "@mui/material";

function About() {
  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Card elevation={4} sx={{ borderRadius: 3, p: 3 }}>
        <CardContent>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            About This Project
          </Typography>

          <Divider sx={{ mb: 3, width: "60%", mx: "auto" }} />

          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            This web application leverages <strong>deep learning models</strong> to
            assist in the early detection of <strong>brain tumors</strong> using MRI scans.
            By analyzing medical imaging data, it provides an efficient way to support
            healthcare professionals in diagnosis and decision-making.
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            The platform is built with modern technologies including{" "}
            <strong>React</strong> for the front-end, <strong>Vite</strong> for
            blazing-fast development, and <strong>Material UI</strong> for a
            clean, professional interface.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            ##### PUT SOMETHING GOODRAAAAAA FUCKER.......########
          </Typography>

          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Typography variant="subtitle1" color="text.secondary">
              Empowering medical diagnostics with AI and modern web technology.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default About;
