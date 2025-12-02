import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductListPage from "./components/ProductListPage";
import ProductDetailPage from "./components/ProductDetailPage";
import Breadcrumbs from "./components/Breadcrumbs";
import productData from "./data/productData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <>
              <h1>Home Page</h1>
              <Link to="/products">Go to Products</Link>
            </>
          }
        />

        <Route
          path="/products/*"
          element={
            <>
              <Breadcrumbs />
              <ProductListPage products={productData} />
            </>
          }
        />
        <Route
          path="/products/:category/:id"
          element={
            <>
              <Breadcrumbs products={productData} />
              <ProductDetailPage products={productData} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
