import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import axios from "axios";
import { TrendingCoins } from "../../util/ApiCalls";
import { useCryptoContextValues } from "../../hooks";

export const Carousel = () => {
  const { state } = useCryptoContextValues();
  const [trendingCoins, setTrendingCoins] = useState([]);

  console.log(state.currency, trendingCoins);

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(state.currency));
    setTrendingCoins(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [state.currency]);

  return (
    <Box
      sx={{
        height: "20%",
        display: "flex",
        alightItems: "center",
      }}
    >
      Carousel
    </Box>
  );
};
