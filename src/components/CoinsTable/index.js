import React, { useEffect, useState } from "react";

import axios from "axios";
import { CoinList } from "../../util/ApiCalls";
import { useCryptoContextValues } from "../../hooks";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export const CoinsTable = () => {
  const { state } = useCryptoContextValues();

  const [coinsList, setCoinsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchCoinsList = async () => {
    setLoading(true);

    const { data } = await axios.get(CoinList(state.currency));

    setCoinsList(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoinsList();
  }, [state.currency]);

  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h4" style={{ margin: 18, fontFamily: "Montserrat" }}>
        Cryptocurrency Prices by Market Cap
      </Typography>
      <TextField
        label="Search For a Crypto Currency.."
        variant="outlined"
        style={{ marginBottom: 20, width: "100%" }}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Container>
  );
};
