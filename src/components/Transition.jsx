import React, { useState, useEffect } from "react"
import TextTransition, { presets } from "react-text-transition"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { BreakpointProvider } from "gatsby-plugin-breakpoints"

const TEXT = [
  "fast",
  "responsive",
  "dynamic",
  "modern",
  "efficient",
  "interactive",
  "polished",
]

const Transition = () => {
  const [index, setIndex] = useState(0)

  const breakpoints = useBreakpoint()

  useEffect(() => {
    const intervalId = setInterval(() => setIndex(index => index + 1), 1600)
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <TextTransition
      text={TEXT[index % TEXT.length]}
      springConfig={presets.stiff}
      direction="up"
      inline={true}
      style={{
        fontStyle: "italic",
        minWidth: "5rem",
        fontFamily: "monospace",
      }}
      style={breakpoints.md ? { fontSize: "0.6em" } : { fontSize: "1em" }}
    />
  )
}

export default Transition
