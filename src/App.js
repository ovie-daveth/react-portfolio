import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home.tsx";
import { ThemeContextProvider } from "./states/themeActions.js";

function App() {
  return (
    <ThemeContextProvider>
      <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </ThemeContextProvider>
  );
}

export default App;
