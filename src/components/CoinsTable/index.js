import React, { useEffect, useState } from "react";

import axios from "axios";
import { CoinList } from "../../util/ApiCalls";
import { useCryptoContextValues } from "../../hooks";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import LinearProgress from "@mui/material/LinearProgress";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import { useNavigate } from "react-router-dom";

export const CoinsTable = () => {
  const { state } = useCryptoContextValues();

  const [coinsList, setCoinsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const fetchCoinsList = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(state.currency));
    setCoinsList(data);
    setLoading(false);
  };

  const handleUserSearch = () => {
    return coinsList.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
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

      <TableContainer component={Paper}>
        {loading ? (
          <LinearProgress style={{ backgroundColor: "gold" }} />
        ) : (
          <Table aria-label="simple table">
            <TableHead style={{ backgroundColor: "#EEBC1D" }}>
              <TableRow>
                {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                  <TableCell
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontFamily: "Montserrat",
                    }}
                    key={head}
                    align={head === "Coin" ? "left" : "right"}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {handleUserSearch().map((row, index) => {
                const profit = row.price_change_percentage_24h > 0;
                return (
                  <TableRow
                    onClick={() => navigate(`/${row.id}`, { replace: true })}
                    key={index}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{
                        display: "flex",
                        gap: 15,
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={row?.image}
                        alt={row.name}
                        height="50"
                        style={{ marginBottom: 10 }}
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontSize: 22,
                          }}
                        >
                          {row.symbol}
                        </span>
                        <span style={{ color: "darkGrey" }}>{row.name}</span>
                      </div>
                    </TableCell>
                    <TableCell align="right">
                      {state.currencySymbol} {row.current_price.toFixed(2)}
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                        fontWeight: 500,
                      }}
                    >
                      {profit && "+"}
                      {row.price_change_percentage_24h.toFixed(2)}%
                    </TableCell>
                    <TableCell align="right">
                      {state.currencySymbol}
                      {row.market_cap.toString().slice(0, -6)} M
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </Container>
  );
};
