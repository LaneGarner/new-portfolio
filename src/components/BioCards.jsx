import React, { useContext, useState } from "react"
import { IoBulbOutline, IoInformationCircleOutline } from "react-icons/io5"
import { FaGraduationCap, FaPaintBrush } from "react-icons/fa"
import styled from "styled-components"

import { Card } from "../components/Card"
import { ThemeContext } from "../context/ThemeContext"

export const BioCards = () => {
  const { theme } = useContext(ThemeContext)
  const [background] = useState("dark")
  const cards = [
    {
      component: (
        <IoInformationCircleOutline color="var(--react-blue)" size="7em" />
      ),
      copy:
        "I have a strong foundation in JavaScript (ES6+), CSS/SCSS, HTML, mySQL, Node.js, Express, and more.",
    },
    {
      component: <IoBulbOutline color="var(--js-yellow)" size="7em" />,
      copy:
        "I enjoy learning and working with tech such as React, React Native, Gatsby, Redux, GraphQL, and Firebase to build passion projects.",
    },
    {
      component: <FaPaintBrush color="var(--js-yellow)" size="7em" />,
      copy:
        "My work is design focused and my background as a musician inspires creativity throughout the development process.",
    },
    {
      component: <FaGraduationCap color="var(--react-blue)" size="7em" />,
      copy:
        "I am always learning new things and pushing myself forward. I believe in approaching topics with a growth mindset to learn all that I can.",
    },
  ]

  return (
    <BioCardContainer>
      <BioCardContent>
        {cards.map((card, index) => (
          <Card theme={theme} background={background}>
            <div className="card">
              <div className="card-icon">{card.component}</div>
              <p>{card.copy}</p>
            </div>
          </Card>
        ))}
      </BioCardContent>
    </BioCardContainer>
  )
}

const BioCardContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BioCardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
  margin: auto;
  padding-bottom: 4em;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
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
    @media (max-width: 650px) {
      padding: 0;
    }
  }
  .card {
    width: 25em;
    height: 20em;
    @media (max-width: 650px) {
      width: 90%;
      height: auto;
      margin: auto;
    }
  }
  .card
  .card-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    box-shadow: none;
    margin: 0;
    padding: 0;
    height: 11em;
    @media (max-width: 650px) {
      height: 9em;
    }
  }
  .card-icon:hover {
    box-shadow: none;
  }
  h3 {
    font-size: 3em;
  }
`
