import { Route, BrowserRouter, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import "./index.css";
import { ProductListPage } from "./Pages/ProductListPage";
import { ProductPage } from "./Pages/ProductPage";
import { AboutPage } from "./Pages/AboutPage";
import { ContactPage } from "./Pages/Contact";
import SignUpForm from "./Pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { LoginPage } from "./Pages/LoginPage";
import { useSelector } from "react-redux";
import { CategoryPage } from "./Pages/CategoryPage";
import { ShoppingCartPage } from "./Pages/ShoppingCartPage";





function App() {

  const category = useSelector((store) => store.product.category);
  const id = useSelector((store) => store.product.productId);
  // console.log("APP ID>>>>>", id);



  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ProductListPage />} />
          <Route path="/product/:type/:id/:slug" element={<ProductPage />} />
          <Route path="/shopping/:gender/:title/" element={<CategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shopcart" element={<ShoppingCartPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />

    </div>
  );
}

export default App;
