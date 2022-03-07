import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { AppHeader } from "./components/Header";
import { CryptoProvider } from "./contexts/CryptoProvider";

function App() {
  return (
    <CryptoProvider>
      <BrowserRouter>
        <AppHeader />
        <AppRouter />
      </BrowserRouter>
    </CryptoProvider>
  );
}

export default App;
