import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
      return () => {
        window.removeEventListener("scroll", () => {});
      };
    });
  }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        alt="Netflix logo"
        src={process.env.PUBLIC_URL + `/assets/Netflix_Logo_RGB.png`}
        className="nav__logo"
        onClick={() => window.location.reload()}
      />
      <Avatar className="nav__avatar">JJ</Avatar>
    </nav>
  );
};

export default Nav;
