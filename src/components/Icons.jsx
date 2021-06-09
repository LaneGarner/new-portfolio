import React from "react"
import styled from "styled-components"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiGatsby,
  SiFirebase,
  SiBootstrap,
  SiRedux,
  SiSass,
  SiFigma,
  SiGithub,
} from "react-icons/si"

import { FaNode } from "react-icons/fa"

export const Icons = () => {
  const breakpoints = useBreakpoint()

  const iconList = [
    [
      {
        name: "React and React Native",
        icon: (
          <SiReact
            className="react-icon"
            size={breakpoints.sm ? "3.5em" : "4em"}
            // size="4em"
            color="var(--react-blue)"
          />
        ),
      },
    ],
    [
      {
        name: "JavaScript",
        icon: (
          <SiJavascript
            size={breakpoints.sm ? "2.3em" : "3em"}
            color="var(--js-yellow)"
          />
        ),
      },
      {
        name: "CSS",
        icon: (
          <SiCss3
            size={breakpoints.sm ? "2.3em" : "3em"}
            color="var(--css-blue)"
          />
        ),
      },
      {
        name: "HTML",
        icon: (
          <SiHtml5
            size={breakpoints.sm ? "2.3em" : "3em"}
            color="var(--html-red)"
          />
        ),
      },
    ],
    [
      {
        name: "Node.js",
        icon: (
          <FaNode
            size={breakpoints.sm ? "2.3em" : "3em"}
            color="var(--node-green)"
          />
        ),
      },
      {
        name: "MySQL",
        icon: (
          <SiMysql
            size={breakpoints.sm ? "2.3em" : "3em"}
            color="var(--sql-orange)"
          />
        ),
      },
      {
        name: "SCSS",
        icon: (
          <SiSass
            size={breakpoints.sm ? "2.3em" : "3em"}
            color="var(--sass-pink)"
          />
        ),
      },
      {
        name: "Redux",
        icon: (
          <SiRedux
            size={breakpoints.sm ? "2.3em" : "3em"}
            color="var(--redux-purple)"
          />
        ),
      },
    ],

    [
      {
        name: "Git",
        icon: (
          <SiGithub
            size={breakpoints.sm ? "2.3em" : "3em"}
            color="var(--dark-grey)"
          />
        ),
      },
      {
        name: "Bootstrap",
        icon: (
          <SiBootstrap
            size={breakpoints.sm ? "2.3em" : "3em"}
            color="var(--bootstrap-purple)"
          />
        ),
      },
      {
        name: "Figma",
        icon: (
          <SiFigma
            size={breakpoints.sm ? "2.3em" : "3em"}
            color="var(--figma-blue)"
          />
        ),
      },

      {
        name: "Gatsby",
        icon: (
          <SiGatsby
            size={breakpoints.sm ? "2.3em" : "3em"}
            color="var(--gatsby-purple)"
          />
        ),
      },
      {
        name: "Firebase",
        icon: (
          <SiFirebase
            size={breakpoints.sm ? "2.3em" : "3em"}
            color="var(--firebase-yellow)"
          />
        ),
      },
    ],
  ]

  return (
    <AboutIcons>
      {iconList[0].map(icon => (
        <div key={icon.name} tooltip={icon.name} className="icon">
          {icon.icon}
        </div>
      ))}
      <div className="row">
        {iconList[1].map(icon => (
          <div key={icon.name} tooltip={icon.name} className="icon">
            {icon.icon}
          </div>
        ))}
      </div>
      <div className="row">
        {iconList[2].map(icon => (
          <div key={icon.name} tooltip={icon.name} className="icon">
            {icon.icon}
          </div>
        ))}
      </div>
      <div className="row">
        {iconList[3].map(icon => (
          <div key={icon.name} tooltip={icon.name} className="icon">
            {icon.icon}
          </div>
        ))}
      </div>
    </AboutIcons>
  )
}

const AboutIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3em;
  .row {
    display: inline;
    display: flex;
  }
  .icon {
    margin: 2em 1em;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .icon[tooltip] {
    position: relative;
  }
  .icon[tooltip]::before {
    content: attr(tooltip);
    position: absolute;
    margin-top: 20px;
    background: #555;
    color: white;
    font-size: 0.8em;
    white-space: nowrap;
    z-index: 100;
    padding: 0.3em;
    border-radius: 0.5em;
    transform: scale(0) translateY(20px);
    transition: transform ease-out 150ms, bottom ease-out 150ms;
  }
  .icon[tooltip]:hover::before {
    transform: scale(1) translateY(46px);
  }
  .react-icon {
    animation: App-logo-spin infinite 20s linear;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
