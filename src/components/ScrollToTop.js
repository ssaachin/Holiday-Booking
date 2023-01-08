import React, { useState } from "react";
import styled from "styled-components";
import logo7 from "../assets/logo7.png";


export default function ScrollToTop() {

  const [scrollState, setScrollState] = useState(false);

  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });
  return (

    // Button to return to top

    <ToTop onClick={toTop} scrollState={scrollState}>
      <img src={logo7} alt="" />
    </ToTop>
  );
}

// CSS for this file

const ToTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};
  position: fixed;
  cursor: pointer;
  z-index: 10;
  bottom: 1rem;
  right: 2rem;
  img {
    height: 2rem;

  }
  border-radius: 2rem;
  background-color: black;
  padding: 1rem;
`