import React, { useContext } from "react"
import styled from "styled-components"

import { ThemeContext } from "../context/ThemeContext"

export const Card = ({ children, mode, background }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <CardStyles mode={mode} background={background} theme={theme}>
      {children}
    </CardStyles>
  )
}

const CardStyles = styled.article`
  border-radius: var(--border-radius);
  color: ${props =>
    props.theme === "light" && props.background !== "dark"
      ? "var(--dark-grey)"
      : "var(--lightest-grey)"};
  background: ${props =>
    props.theme === "light" && props.background === "dark"
      ? "var(--dark-grey)"
      : props.theme === "light" && props.background !== "light"
      ? "var(--lightest-grey)"
      : props.theme === "dark"
      ? "var(--black)"
      : "var(--lightest-grey)"};
  margin: 2rem 3rem;
  border-radius: var(--border-radius);
  padding: 1rem 3rem 3rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.075);
  &:hover {
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.11);
  }
  /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); */

  /* &:nth-of-type(1) {
    grid-area: 1 / 1 / 2 / 2;
  } */
`
