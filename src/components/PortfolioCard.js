import React from 'react'

import { FaGithub } from "react-icons/fa"
import { GoBrowser } from "react-icons/go"

import * as PortfolioCardStyles from "./PortfolioCard.module.scss"


export const PortfolioCard = ({ name, description, uses, url, github }) => {
    return (
            // <div >
        <a className={PortfolioCardStyles.card} href={url} rel="noreferrer" target="_blank">
                <h2>{name}</h2>
                <p>{description}</p>
                <div className={PortfolioCardStyles.preview}></div>
                <p>{uses}</p>
                <div className={PortfolioCardStyles.social}>
                    <a href={github} rel="noreferrer" target="_blank">
                        <div>
                            <FaGithub size="1.7rem" />
                            Code
                        </div>
                    </a>
                    <a href={url}>
                        <div>
                            <GoBrowser size="1.7rem" />
                            Hosted
                        </div>
                    </a>
                </div>
        </a>
            // </div>
    )
}
