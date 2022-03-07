import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import axios from "axios";
import { TrendingCoins } from "../../util/ApiCalls";
import { useCryptoContextValues } from "../../hooks";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

const items = (trendingCoins, state) => {
  return trendingCoins.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;
    return (
      <Box>
        <Link to={`/${coin.id}`}>
          <Box
            sx={{
              color: "yellow",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div>
              <img
                src={coin.image}
                alt={coin.name}
                height="80"
                style={{ marginBottom: 10 }}
              />
            </div>
            <div>
              <span style={{ fontSize: 25 }}>{coin?.symbol}</span>(
              {profit && "+"}
              {coin?.price_change_percentage_24h.toFixed(2)}%)
            </div>
            <div style={{ fontSize: 22 }}>
              {state.currencySymbol}
              {coin?.current_price.toFixed(2)}
            </div>
          </Box>
        </Link>
      </Box>
    );
  });
};

const responsive = {
  0: {
    items: 2,
  },
  512: {
    items: 4,
  },
};

export const Carousel = () => {
  const { state } = useCryptoContextValues();
  const [trendingCoins, setTrendingCoins] = useState([]);

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
        height: "10%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items(trendingCoins, state, setTrendingCoins)}
      />
    </Box>
  );
};
