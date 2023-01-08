import React from "react";
import styled from "styled-components";
import service5 from "../assets/service5.png";
import services6 from "../assets/services6.png";
import services9 from "../assets/services9.png";

export default function Services() {

  // data

  const data = [
    {
      icon: service5,
      title: "Travels",
      about:
        "Over 164 countries to travel to, which one are you choosing first?",
    },
    {
      icon: services6,
      title: "Stays",
      about:
        "Whats a holiday without a good nights sleep? but don't worry, we got you covered.",
    },
    {
      icon: services9,
      title: "Activities",
      about:
        "From surfing to skiing whatever it is you want to do, we have it here.",
    },
  ];

  return (
    <Section id="services">

      {/* Displays the data */}

      {data.map((service, index) => {
        return (
          <div key={index} className="service">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.about}</p>
          </div>
        );
      })}
    </Section>
  );
}

// CSS for this file

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.8s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;