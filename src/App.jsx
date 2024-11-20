import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Academic from "./Pages/Academic";
import Admission from "./Pages/Admission";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from 'scroll-to-top-react';
import arrowImg from "./assets/images/up-chevron.png"
import Blogs from "./Pages/Blogs";
const App = () => {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div>
        <ScrollToTop displayType="image"
          imageSrc={arrowImg} cl />
      </div>

      <Footer />
    </div>
  );
};

export default App;