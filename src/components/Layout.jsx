import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
