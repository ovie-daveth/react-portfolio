import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";

function App() {
  return (
    <Provider store={store}>
      <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </Provider>
  );
}

export default App;
