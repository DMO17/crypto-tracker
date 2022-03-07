import React from "react";
// import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useCryptoContextValues } from "../../hooks";
import { Link } from "react-router-dom";

export const AppHeader = () => {
  const { state, dispatch, ACTIONS } = useCryptoContextValues();

  const updateCurrency = async (e) => {
    await dispatch({
      type: ACTIONS.CURRENCY_SELECTED,
      payload: {
        currency: e.target.value,
        symbol: e.target.value === "GBP" ? "£" : "$",
      },
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Link
              to={"/"}
              style={{ flex: 1, fontWeight: "bold", cursor: "pointer" }}
            >
              <Typography variant="h4" component="div">
                CRYPTO-TRACKER
              </Typography>
            </Link>

            <Select
              value={state.currency}
              onChange={updateCurrency}
              variant="filled"
              sx={{
                width: 100,
                height: 40,
                marginLeft: 15,
                border: "1px solid white",
              }}
            >
              <MenuItem value={"GBP"}>GBR</MenuItem>
              <MenuItem value={"USD"}>USD</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
