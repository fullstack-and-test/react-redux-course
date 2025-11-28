import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const LazyChart = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./components/HeavyChart")), 2000);
  });
});

const LazyTable = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./components/BigTable")), 5000);
  });
});
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Welcome!</h1>
              <Link to="/dashboard">Go to Dashboard page</Link>
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div>
              <h1>Головна сторінка дашборду</h1>
              <Link to="/">Go to Home page</Link>
              <Suspense fallback={<div>Loading heavy chart ...</div>}>
                <LazyChart />
              </Suspense>

              <Suspense fallback={<div>Loading big table ...</div>}>
                <LazyTable />
              </Suspense>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
