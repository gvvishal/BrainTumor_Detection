import React from "react";
import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SendIcon from "@mui/icons-material/Send";
import InsightsIcon from "@mui/icons-material/Insights";
import VisibilityIcon from "@mui/icons-material/Visibility";

function HowItWorks() {
  const steps = [
    {
      icon: <CloudUploadIcon color="primary" />,
      text: "Upload an MRI scan of the brain.",
    },
    {
      icon: <SendIcon color="primary" />,
      text: "The image is securely sent to the backend for analysis.",
    },
    {
      icon: <InsightsIcon color="primary" />,
      text: "The AI model processes the scan and detects potential tumors.",
    },
    {
      icon: <VisibilityIcon color="primary" />,
      text: "The result is displayed in an easy-to-understand format.",
    },
  ];

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold" }}
      >
        How It Works
      </Typography>

      <Card elevation={4} sx={{ borderRadius: 3, p: 2, mt: 4 }}>
        <CardContent>
          <List>
            {steps.map((step, index) => (
              <ListItem key={index} sx={{ py: 2 }}>
                <ListItemIcon>{step.icon}</ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: "h6", fontWeight: "medium" }}
                  primary={step.text}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}

export default HowItWorks;
