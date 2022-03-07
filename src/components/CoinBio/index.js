import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import parse from "html-react-parser";
import { useCryptoContextValues } from "../../hooks";

export const CoinBio = ({ coinData }) => {
  const { state } = useCryptoContextValues();

  return (
    <Box sx={{ marginTop: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src={coinData?.image?.large}
          alt={coinData?.name}
          height="200"
          sx={{ marginBottom: 20 }}
        />
      </Box>
      <Box>
        <Typography variant="h3" align="center">
          {coinData?.name}
        </Typography>
        <Typography variant="subtitle1" align="center">
          {coinData?.description?.en &&
            parse(coinData?.description?.en?.split(". ")[0])}
          .
        </Typography>
      </Box>
      <Box sx={{ marginTop: 4, marginBottom: 2 }}>
        <div>
          <Typography align="center" variant="h5">
            Rank:{coinData?.coingecko_rank}
          </Typography>
        </div>
        <div>
          <Typography align="center" variant="h5">
            Currrent Price: {state.currencySymbol}
            {coinData?.market_data?.current_price[state.currency.toLowerCase()]}
          </Typography>
        </div>
        <div>
          <Typography align="center" variant="h5">
            Market Cap: {state.currencySymbol}
            {coinData?.market_data?.market_cap[state.currency.toLowerCase()]
              .toString()
              .slice(0, 6)}
          </Typography>
        </div>
      </Box>
    </Box>
  );
};
