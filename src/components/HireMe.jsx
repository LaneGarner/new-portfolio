import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";


export const HireMe = () => {
  const Diagonal = styled.div`
    transform: skewY(-3deg);
    background: #232526;
    background: -webkit-linear-gradient(
      to right,
      #414345,
      #232526
    ); 
    background: linear-gradient(
      to right,
      #414345,
      #232526
    ); 
  `;
  
  const HireMeContent = styled.div`
    padding: 4rem 8rem;
    max-width: 70em;
    margin: 0 auto;
    transform: skewY(3deg);
    color: white;
    animation: fadeIn 2s;
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
      text-align: right;
      margin-right: 4.2em;
    }
    p {
      font-size: 1.2em;
    }
  `;

  
  return (
    <Diagonal>
        <HireMeContent>
          <h2>Hire me</h2>
          <p>
            I am currently seeking full-time employment as a front-end
            developer. I have experience working on a remote dev team and thrive
            in an agile environment.
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
        </HireMeContent>
      </Diagonal>
  )
}
