import { Route, BrowserRouter, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import "./index.css";
import { ProductListPage } from "./Pages/ProductListPage";
import { ProductPage } from "./Pages/ProductPage";
import { AboutPage } from "./Pages/AboutPage";
import { ContactPage } from "./Pages/Contact";





function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/shop" element={<ProductListPage />} />
        </Routes>
        <Routes>
          <Route path="/product" element={<ProductPage />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
