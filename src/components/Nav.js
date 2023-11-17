import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
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

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        alt="Netflix logo"
        src={process.env.PUBLIC_URL + `/assets/Netflix_Logo_RGB.png`}
        className="nav__logo"
        onClick={() => {
          navigate("/");
          window.location.reload();
        }}
      />
      <input
        className="nav__input"
        type="text"
        placeholder="영화를 검색해 주세요."
        value={searchValue}
        onChange={handleChange}
      />
      <Avatar className="nav__avatar">JJ</Avatar>
    </nav>
  );
};

export default Nav;
