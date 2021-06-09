import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export const WorkWithMe = () => {
  return (
    <HireMeContent>
      <div className="text-container">
        <h2>Work with me</h2>
        <p>
          I offer freelance web and mobile development services to clients.
          Let's work together to create your dream website or app.
        </p>
        <p>
          <Link to="/portfolio">
            <strong>Browse my portfolio</strong>
          </Link>{" "}
          as an introduction to my work <br />
          or{" "}
          <Link to="/contact">
            <strong>get in touch</strong>
          </Link>{" "}
          to start a conversation.
        </p>
      </div>
    </HireMeContent>
  )
}

const HireMeContent = styled.div`
  padding: 4em 8em;
  position: relative;
  z-index: 100;
  color: white;
  animation: fadeIn 2s;
  @media (max-width: 800px) {
    padding: 4em 3em;
    /* width: 100%; */
    /* margin: 0; */
  }

  .text-container {
    max-width: 50em;
    margin: 6em auto;
  }

  a {
    color: var(--js-yellow);
    text-decoration-color: white;
  }

  a:hover {
    color: var(--lightest-grey);
    text-decoration-color: var(--js-yellow);
  }

  h2 {
    font-size: 4em;
    color: var(--react-blue);
  }

  p {
    font-size: 1.2em;
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    background: var(--lightest-grey);
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transform: skewY(-3deg);
    transform-origin: 50% 0;
    outline: 1px solid transparent;
    backface-visibility: hidden;
    background: #232526;
    background: -webkit-linear-gradient(to right, #518f46, #232526);
    background: linear-gradient(to right, #466a8f, #2222222);
  }
`
