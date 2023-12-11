// import Nav from "./Header/Nav";
import Nav from "./components/Nav";
import Home from "./Header/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import { UserProvider } from "./context/UserContext";
import Logout from "./components/Logout";

import About from "./Header/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
function App() {
  return (
    <UserProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </UserProvider>
  );
}

export default App;
