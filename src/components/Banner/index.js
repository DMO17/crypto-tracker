import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Carousel } from "../Carousel";

export const Banner = () => {
  return (
    <Box
      sx={{
        marginTop: 5,
        backgroundColor: "#e9bcb7",
        backgroundImage: "linear-gradient(315deg, #e9bcb7 0%, #29524a 74%)",
      }}
    >
      <Container
        sx={{
          height: 400,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ text: "center" }}>
          <Typography
            sx={{
              color: "gold",
              fontWeight: "bold",
            }}
            variant="h3"
            component="div"
            align="center"
          >
            CRYPTO-TRACKER
          </Typography>

          <Typography
            sx={{ marginTop: "40px", marginBottom: "40px" }}
            align="center"
            variant="subtitle1"
            component="div"
          >
            Get all the info regarding your favourite Crypto Currency
          </Typography>

          <Carousel />
        </Box>
      </Container>
    </Box>
  );
};
