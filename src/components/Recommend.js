import React, { useState } from "react";
import styled from "styled-components";
import spain from "../assets/spain.png";
import iceland from "../assets/iceland.png";
import swiss from "../assets/swiss.png";



export default function Recommend() {

  // Data for recomendation

  const data = [

    {
      image: spain,
      title: "Spain",
      subTitle: "Spain is a country located in southwestern Europe on the Iberian Peninsula to the south of France and Andorra and to the east of Portugal.",
      cost: "£45 for a return flight",
    },
    {
      image: swiss,
      title: "Switzerland",
      subTitle: "Switzerland is a small mountainous country located in central Europe. This landlocked country is about the size of New Jersey and is between France and Italy.",
      cost: "£88 for a return flight",
    },
    {
      image: iceland,
      title: "Iceland",
      subTitle: "Iceland is located between the Greenland Sea and the North Atlantic Ocean. It is northwest of the United Kingdom, and is slightly smaller than the state of Kentucky.",
      cost: "£110 for a return flight",
    },
  ];

  // menu data toggle 

  const packages = [
    "Based On Most Visited By Our Customers ",
  ];

  // selects 3 different categories - didnt get to finish

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Top Three Recommendation</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li key={index}
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>

          {/* Displays the data */}

      <div className="destinations">
        {data.map((destination, index) => {
          return ( 
            <div key={index} className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

// CSS for this file

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.5rem solid teal;
      }
    }
  }


  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: White;
      border: 0.5rem solid teal;
      border-radius: 2rem;
      transition: 0.5s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 4px 5px;
      }
      img {
        width: 100%;
      }
    }
  }
`;