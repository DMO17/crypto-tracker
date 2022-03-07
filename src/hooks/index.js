import { useContext } from "react";
import { CryptoContext } from "../contexts/CryptoProvider";

export const useCryptoContextValues = () => {
  return useContext(CryptoContext);
};
