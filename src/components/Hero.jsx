import React, { useContext } from "react"
import { StaticImage } from "gatsby-plugin-image"
import ReactTypingEffect from "react-typing-effect"
import { Link } from "gatsby"
import styled from "styled-components"

import { ThemeContext } from "../context/ThemeContext"

export const Hero = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <HeroContainer theme={theme}>
      <section className="left-content">
        <StaticImage
          src="../images/profilePic.jpg"
          alt="Profile pic"
          placeholder="blurred"
          width={375}
          height={375}
          objectFit="cover"
          imgStyle={{ borderRadius: "50%" }}
          style={{ borderRadius: "50%" }}
        />
      </section>
      <section className="right-content">
        <div className="hello">
          <ReactTypingEffect
            text={"Hello."}
            typingDelay={1000}
            eraseDelay={1500}
            speed={300}
            eraseSpeed={100}
          />
        </div>
        <p className="bio">
          I'm<span style={{ fontWeight: 800 }}> Lane Garner</span>,
          <br /> a fullstack developer
          <br /> based in Austin, Texas.
        </p>
        <p className="contact">
          Need a developer?{" "}
          <Link to="/contact" style={{ textDecoration: "underline" }}>
            <strong>Get in touch</strong>
          </Link>
          .
        </p>
      </section>
    </HeroContainer>
  )
}

const HeroContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  min-height: 70vh;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  a {
    text-decoration-color: var(--react-blue);
  }
  .left-content {
    margin: 2em;
  }
  .right-content {
    display: flex;
    flex-direction: column;
    margin: 0.8em 2em 2em;
    min-width: 300px;
    margin-left: 2em;
    color: ${props =>
      props.theme === "dark" ? "var(--lightest-grey)" : "var(--black)"};
  }
  .hello {
    font-size: 4rem;
    margin-bottom: 0;
    font-weight: 800;
    line-height: 1.1;
    @media (max-width: 1000px) {
      margin: auto;
    }
  }
  .bio {
    font-weight: 100;
    padding: 0.3em 0;
    font-size: 1.62671rem;
    line-height: 1.1;
    padding: 0.3em 0;
    @media (max-width: 1000px) {
      margin: auto;
      text-align: center;
    }
  }
  .contact {
    font-size: 1.2rem;
    color: var(--react-blue);
    background: var(--darkest-grey);
    padding: 0.55em;
    border-radius: 0.2px;
    a {
      color: var(--js-yellow);
    }
    @media (max-width: 1000px) {
      margin-top: 2em;
      margin-right: auto;
      margin-left: auto;
      width: 12em;
      text-align: center;
    }
  }
`
