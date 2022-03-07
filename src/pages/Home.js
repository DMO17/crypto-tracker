import React from "react";

import Container from "@mui/material/Container";
import { Banner } from "../components/Banner";
import "../index.css";
import { CoinsTable } from "../components/CoinsTable";

export const Home = () => {
  return (
    <Container>
      <Banner />

      <CoinsTable />
    </Container>
  );
};
