import React, { useContext } from "react"
import styled from "styled-components"

import { ThemeContext } from "../context/ThemeContext"

export const BottomContentWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <BottomContentWrapperContainer theme={theme}>
      {children}
    </BottomContentWrapperContainer>
  )
}

const BottomContentWrapperContainer = styled.div`
  background: ${props =>
    props.theme === "dark" ? "var(--black)" : "var(--lightest-grey)"};

  /* background: red; */
  /* padding: var(--skew-padding) 0; */
  margin-top: -100px;
`
