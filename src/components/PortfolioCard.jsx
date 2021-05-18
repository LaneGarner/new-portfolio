import React from "react"

import { FaGithub } from "react-icons/fa"
import { GoBrowser } from "react-icons/go"

import * as PortfolioCardStyles from "./PortfolioCard.module.scss"

export const PortfolioCard = ({ name, description, uses, url, github }) => {
  return (
    <div className={PortfolioCardStyles.card}>
      <div className={PortfolioCardStyles.title}>
        <h2>{name}</h2>
      </div>
      <div className={PortfolioCardStyles.description}>
        <p>{description}</p>
      </div>
      {/* <div className={PortfolioCardStyles.div3}> */}
      <div className={PortfolioCardStyles.preview}></div>
      {/* </div> */}
      <div className={PortfolioCardStyles.uses}>
        <p>{uses}</p>
      </div>
      <div className={PortfolioCardStyles.github}>
        <a href={github} rel="noreferrer" target="_blank">
          <div className={PortfolioCardStyles.iconLink}>
            <FaGithub size="1.7rem" />
            Code
          </div>
        </a>
      </div>
      <div className={PortfolioCardStyles.hosted}>
        <a href={url} rel="noreferrer" target="_blank">
          <div className={PortfolioCardStyles.iconLink}>
            <GoBrowser size="1.7rem" />
            Hosted
          </div>
        </a>
      </div>
    </div>
  )
}
