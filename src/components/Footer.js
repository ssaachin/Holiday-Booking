import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";


export default function Footer() {
  return (
    <FooterContainer>

      {/* Copyright text */}

      <span>Copyright &copy; 2021 Sachin. All rights reserved</span>

      {/* navigates to the hero, services and recommend on homepage */}

      <ul className="links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">About</a>
        </li>
        <li>
          <a href="#recommend">Places</a>
        </li>
      </ul>

      {/* Lists of social media */}

      <ul className="social__links">
        <li>
          <BsFacebook />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <BsLinkedin />
        </li>
      </ul>
    </FooterContainer>
  );
}

// CSS for this file

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: Teal;
  border-radius: 0.5rem;
  padding: 2.5rem;
  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;