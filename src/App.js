import "./scss/common/index.scss";
import { inject } from "@vercel/analytics";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import NotFound from "./components/common/NotFound";
import Admin from "./components/admin/Admin";
import Header from "./components/common/Header";
import Login from "./components/login/Login";
import { useLocation } from "react-router-dom";
import Register from "./components/register/Register";

function App() {
  inject();

  const location = useLocation();

  return (
    <div className="wrapper">
      {location.pathname === "/" ||
      location.pathname === "/login" ||
      location.pathname === "/register" ? (
        ""
      ) : (
        <Header />
      )}

      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/admin" exact element={<Admin />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
