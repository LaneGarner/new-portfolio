import React from "react"

import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiGatsby,
  SiFirebase,
  SiBootstrap,
  SiAdobe,
  SiRedux,
  SiSass,
  SiFigma,
  SiGithub,
} from "react-icons/si"

import { FaNode } from "react-icons/fa"

import * as iconStyles from "./icons.module.scss"

export const Icons = () => {
  const iconList = [
    [
      {
        name: "React and React Native",
        icon: (
          <SiReact
            className={iconStyles.reactIcon}
            size="4em"
            color="var(--react-blue)"
          />
        ),
      },
    ],
    [
      {
        name: "JavaScript",
        icon: <SiJavascript size="3em" color="var(--js-yellow)" />,
      },
      {
        name: "CSS",
        icon: <SiCss3 size="3em" color="var(--css-blue)" />,
      },
      {
        name: "HTML",
        icon: <SiHtml5 size="3em" color="var(--html-red)" />,
      },
    ],
    [
      {
        name: "Node.js",
        icon: <FaNode size="3em" color="var(--node-green)" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql size="3em" color="var(--sql-orange)" />,
      },
      {
        name: "SCSS",
        icon: <SiSass size="3em" color="var(--sass-pink)" />,
      },
      {
        name: "Redux",
        icon: <SiRedux size="3em" color="var(--redux-purple)" />,
      },
    ],

    [
      {
        name: "Git",
        icon: <SiGithub size="3em" color="var(--dark-grey)" />,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap size="3em" color="var(--bootstrap-purple)" />,
      },
      {
        name: "Figma",
        icon: <SiFigma size="3em" color="var(--figma-blue)" />,
      },

      {
        name: "Gatsby",
        icon: <SiGatsby size="3em" color="var(--gatsby-purple)" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase size="3em" color="var(--firebase-yellow)" />,
      },
    ],
  ]

  return (
    <div className={iconStyles.aboutIcons}>
      {iconList[0].map(icon => (
        <div key={icon.name} tooltip={icon.name} className={iconStyles.icon}>
          {icon.icon}
        </div>
      ))}
      <div className={iconStyles.row}>
        {iconList[1].map(icon => (
          <div key={icon.name} tooltip={icon.name} className={iconStyles.icon}>
            {icon.icon}
          </div>
        ))}
      </div>
      <div className={iconStyles.row}>
        {iconList[2].map(icon => (
          <div key={icon.name} tooltip={icon.name} className={iconStyles.icon}>
            {icon.icon}
          </div>
        ))}
      </div>
      <div className={iconStyles.row}>
        {iconList[3].map(icon => (
          <div key={icon.name} tooltip={icon.name} className={iconStyles.icon}>
            {icon.icon}
          </div>
        ))}
      </div>
      {/* <div>
        {iconList.map(
          icon =>
            icon === iconList[1] &&
            icon === iconList[2] && (
              <div
                key={icon.name}
                tooltip={icon.name}
                className={iconStyles.icon}
              >
                {icon.icon}
              </div>
            )
        )}
      </div> */}
    </div>
  )
}
