import React, { useReducer } from "react";

export const CryptoContext = React.createContext();

const initialState = {
  currency: "GBP",
  currencySymbol: "£",
};

const ACTIONS = {
  CURRENCY_SELECTED: "SELECTED_USER_CURRENCY",
};

const reducer = (state, action) => {
  if (action.type === ACTIONS.CURRENCY_SELECTED) {
    return {
      ...state,
      currency: action.payload.currency,
      currencySymbol: action.payload.symbol,
    };
  }
};

export const CryptoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const globalValues = { state, dispatch, ACTIONS };

  return (
    <CryptoContext.Provider value={globalValues}>
      {children}
    </CryptoContext.Provider>
  );
};
