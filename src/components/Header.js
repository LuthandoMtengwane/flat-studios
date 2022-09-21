import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      className="header"
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
    >
      <div className="header-inner">
        <div className="logo">FLAT®</div>
        <nav className="nav">
          <li>
            <a href="/design">DESIGN</a>
          </li>
          <li>
            <a href="/strategy">WORK</a>
          </li>
          <li>
            <a href="/cases">BRANDS</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/why">OUR PROCESS</a>
          </li>
        </nav>
        <div className="contact">
          <a href="/contact">WORK WITH US</a>
        </div>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
