import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Carousel } from "../Carousel";

export const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)",
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

          <Typography align="center" variant="subtitle2" component="div">
            Get all the info regarding your favourite Crypto Currency
          </Typography>
        </Box>

        <Carousel />
      </Container>
    </Box>
  );
};
