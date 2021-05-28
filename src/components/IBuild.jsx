import React from "react"
// import * as indexStyles from "../index.module.scss"
import styled from "styled-components"

import Transition from "./Transition"

const BuildContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3em;
  padding-bottom: 0.3em;
  font-size: 5em;
  div {
    margin-bottom: 0.5em;
  }
  .div-one {
    font-size: 0.8em;
  }
  .div-two {
    font-size: 0.6em;
    text-align: center;
    line-height: 1em;
  }
`

export const IBuild = () => {
  return (
    <BuildContainer>
      <div className="div-one">I build</div>
      <Transition />
      <div className="div-two">
        websites
        <br /> and
        <br /> applications
      </div>
    </BuildContainer>
  )
}
