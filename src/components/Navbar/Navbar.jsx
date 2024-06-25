import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setmobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setmobileMenu(false) : setmobileMenu(true);
  };

  return (
    <>
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="logo" className="logo" />
        <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
          <li>
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="program" smooth={true} offset={-250} duration={500}>
              Program
            </Link>
          </li>
          <li>
            <Link to="about us" smooth={true} offset={-110} duration={500}>
              About us
            </Link>
          </li>
          <li>
            <Link to="campus" smooth={true} offset={-250} duration={500}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} offset={-250} duration={500}>
              Testimonials
            </Link>
          </li>
          <li>
            <button className="btn">
              <Link to="contact us" smooth={true} offset={-200} duration={500}>
                Contact Us
              </Link>
            </button>
          </li>
        </ul>
        <img src={menu_icon} className="menu-icon" onClick={toggleMenu} />
      </nav>
    </>
  );
};

export default Navbar;
