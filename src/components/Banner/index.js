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
          "url(https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true)",
      }}
    >
      <Container
        sx={{
          height: 500,
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
            sx={{ marginTop: "40px" }}
            align="center"
            variant="subtitle2"
            component="div"
          >
            Get all the info regarding your favourite Crypto Currency
          </Typography>
        </Box>

        <Carousel />
      </Container>
    </Box>
  );
};
