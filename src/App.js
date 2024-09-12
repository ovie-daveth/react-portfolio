import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home.tsx";
import { ThemeContextProvider } from "./states/themeActions.js";
import Portfolio from "./pages/portfolio/Portfolio.tsx";
import Service from "./pages/services/Service.tsx";
import ProductDetails from "./pages/portfolio/ProductDetails.tsx";
import Blogs from "./pages/blogs/Blogs.tsx";
import Contact from "./pages/contact/Contact.tsx";
import WriteBlog from "./pages/blogs/WriteBlog.tsx";
import BlogDetails from "./pages/blogs/BlogDetails.tsx";

function App() {
  return (
    <ThemeContextProvider>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:id" element={<ProductDetails />} />
      <Route path="/services" element={<Service />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/blog/write" element={<WriteBlog />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </ThemeContextProvider>
  );
}

export default App;
