import { Route, BrowserRouter, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import "./index.css";
import { ShoppingPage } from "./Pages/ShoppingPage";




function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/shop" element={<ShoppingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
