import React, { useContext } from "react"
import { FaGithub } from "react-icons/fa"
import { GoBrowser } from "react-icons/go"
import styled from "styled-components"

import { Card } from "./Card"

import { ThemeContext } from "../context/ThemeContext"

export const PortfolioCard = ({
  name,
  description,
  img,
  uses,
  url,
  github,
}) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Card>
      <PortfolioCardContainer theme={theme}>
        <a className="title" href={url} rel="noreferrer" target="_blank">
          <h2>{name}</h2>
        </a>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="preview">
          <a className="image" href={url} rel="noreferrer" target="_blank">
            {img}
          </a>
        </div>
        <div className="uses">
          <p>{uses}</p>
        </div>
        <div className="hosted">
          <a href={url} rel="noreferrer" target="_blank">
            <div className="icon-link">
              <GoBrowser size="1.7rem" />
              Hosted
            </div>
          </a>
        </div>
        <div className="code">
          <a href={github} rel="noreferrer" target="_blank">
            <div className="icon-link">
              <FaGithub size="1.7rem" />
              Code
            </div>
          </a>
        </div>
      </PortfolioCardContainer>
    </Card>
  )
}

const PortfolioCardContainer = styled.div`
  width: 30rem;
  border-radius: var(--border-radius);
  display: grid;
  justify-items: center;
  grid-template-columns: 0.25fr repeat(2, 1fr) 0.25fr;
  grid-template-rows: 0.3fr 0.9fr 2fr 0.7fr 0.8fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media (max-width: 720px) {
    width: 60vw;
    grid-template-rows: 0.3fr 0.9fr 1fr 0.7fr 0.8fr;
  }
  h2 {
    font-size: 2.5rem;
    padding-top: 2rem;
    color: ${props =>
      props.theme === "dark" ? "var(--lightest-grey)" : "var(--black)"};
    }
  }
  .title {
    grid-area: 1 / 2 / 2 / 4;
  }
  .description {
    grid-area: 2 / 2 / 3 / 4;
    font-size: 1.1em;
  }
  
  .uses {
    grid-area: 4 / 2 / 5 / 4;
    font-size: 1.1em;
  }
  .hosted {
    grid-area: 5 / 2 / 6 / 3;
    align-self: center;
  }
  .code {
    grid-area: 5 / 3 / 6 / 4;
    align-self: center;
  }
  .icon-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--lighter-grey);
    color: ${props =>
      props.theme === "dark" ? "var(--lightest-grey)" : "var(--black)"};
    transition: all 0.2s ease-in;
    font-size: 1em;
    svg {
      margin-bottom: 0.2em;
    }
    &:hover {
      color: var(--react-blue);
      transform: scale(1.03);
    }
  }
  .preview {
    grid-area: 3 / 2 / 4 / 4;
    transition: all 0.2s ease-in-out;
    width: 80%;
    &:hover {
      transform: scale(1.1);
    }
  }
`
