import React from 'react'
import { IoBulbOutline, IoInformationCircleOutline } from "react-icons/io5"
import { FaGraduationCap, FaPaintBrush } from "react-icons/fa"

import styled from 'styled-components';

const BioCardSection = styled.section`
  background: #fafafa;

  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
  margin: auto;
  width: 70em;

  padding-bottom: 4em;
  .card {
    color: var(--dark-grey);
    background: #fff;
    width: 25em;
    height: 27em;
    margin: 2rem 3rem;
    border-radius: 1rem;
    padding: 3rem;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.075);
    &:nth-of-type(1) {
      grid-area: 1 / 1 / 2 / 2;
    }
    &:nth-of-type(2) {
      grid-area: 1 / 2 / 2 / 3;
    }
    &:nth-of-type(3) {
      grid-area: 2 / 1 / 3 / 2;
    }
    &:nth-of-type(4) {
      grid-area: 2 / 2 / 3 / 3;
    }
  }
  p {
    margin: auto;
    padding: 0 1.2em 1em 1.2em;
  }
  .card:hover {
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.11);
  }
  .bulb {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    box-shadow: none;
    margin: 0;
    padding: 0;
    height: 11em;
  }
  .bulb:hover {
    box-shadow: none;
  }
  h3 {
    font-size: 3em;
  }
`;

export const BioCards = () => {
  const cards = [
    {
      component: <IoInformationCircleOutline color="var(--react-blue)" size="7em" />,
      copy: "I have a strong foundation in JavaScript (ES6+), CSS/SCSS, HTML, mySQL, Node.js, Express, and more.",
    },
    {
      component: <IoBulbOutline color="var(--js-yellow)" size="7em" />,
      copy: "I enjoy learning and working with tech such as React, React Native, Gatsby, Redux, GraphQL, and Firebase to build passion projects.",
    },
    {
      component: <FaPaintBrush color="var(--js-yellow)" size="7em" />,
      copy: "My work is design focused and my background as a musician inspires creativity throughout the development process."
    },
    {
      component:  <FaGraduationCap color="var(--react-blue)" size="7em" />,
      copy: "I am always learning new things and pushing myself forward. I believe in approaching topics with a growth mindset to learn all that I can.",
    },
  ]

  return (
    <BioCardSection>
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="bulb">
            {card.component}
          </div>
          <p>{card.copy}</p>
        </div>
      ))}
    </BioCardSection>
  )
}
