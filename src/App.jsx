import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DashboardPage from "./components/DashboardPage";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                <h1>Home Page</h1>
                <Link to="/login">Log in</Link>
              </>
            }
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
