import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HireMeContent = styled.div`
  padding: 4rem 8rem;
  position: relative;
  z-index: 100;
  color: white;
  animation: fadeIn 2s;

  .text-container {
    max-width: 50em;
    margin: 9em auto 10em 5em;
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
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transform: skewY(-3deg);
    transform-origin: 50% 0;
    outline: 1px solid transparent;
    backface-visibility: hidden;
    background: #232526;
    background: -webkit-linear-gradient(to right, #414345, #232526);
    background: linear-gradient(to right, #414345, #232526);
  }
`

export const WorkWithMe = () => {
  return (
    <HireMeContent>
      <div className="text-container">
        <h2>Hire me</h2>
        <p>
          I am currently seeking full-time employment as a front-end developer.
          I have experience working on a remote dev team and thrive in an agile
          environment.
        </p>
        <p>
          I also do freelance web development services for clients. Let's work
          together to create your dream website or app.
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
