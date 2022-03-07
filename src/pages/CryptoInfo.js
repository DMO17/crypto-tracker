import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import { CoinBio } from "../components/CoinBio";
import { CoinChart } from "../components/CoinChart";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../util/ApiCalls";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export const CryptoInfo = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState("");

  const fetchSingleCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoinData(data);
  };

  useEffect(() => {
    fetchSingleCoin();
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <CoinBio coinData={coinData} />

      <CoinChart coinData={coinData} />
    </Box>
  );
};
