import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home.tsx";
import { ThemeContextProvider } from "./states/themeActions.js";
import Portfolio from "./pages/portfolio/Portfolio.tsx";
import ProductDetails from "./pages/portfolio/ProductDetails.tsx";

function App() {
  return (
    <ThemeContextProvider>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:id" element={<ProductDetails />} />
    </Routes>
    </ThemeContextProvider>
  );
}

export default App;
