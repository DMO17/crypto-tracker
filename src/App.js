import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { AppHeader } from "./components/Header";

function App() {
  return (
    <div>
      <AppHeader />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
