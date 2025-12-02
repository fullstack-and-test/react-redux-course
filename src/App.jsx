import { BrowserRouter, Routes, Route } from "react-router-dom";

import CatalogPage from "./components/CatalogPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<CatalogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
