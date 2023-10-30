import "./scss/common/index.scss";
import { inject } from "@vercel/analytics";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import NotFound from "./components/common/NotFound";
import Admin from "./components/admin/Admin";
import Header from "./components/common/Header";

function App() {
  inject();

  return (
    <div className="wrapper">
      <Header />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/admin" exact element={<Admin />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
