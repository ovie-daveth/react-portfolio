import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home.tsx";
import { ThemeContextProvider } from "./states/themeActions.js";
import Portfolio from "./pages/Portfolio.tsx";

function App() {
  return (
    <ThemeContextProvider>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
    </ThemeContextProvider>
  );
}

export default App;
