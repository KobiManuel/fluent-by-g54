import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/MainPage/Main";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Main";
import Creator from "./pages/Creator/Main";
import Setup from "./pages/Creator/Setup";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="campaign" element={<Campaign />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="creator" element={<Creator />} />
        <Route path="creator-account/setup" element={<Setup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
