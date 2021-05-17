import React from "react"
import TextTransition, { presets } from "react-text-transition"

const TEXTS = [
  "fast",
  "responsive",
  "dynamic",
  "modern",
  "efficient",
  "interactive",
  "polished",
]

const Transition = () => {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex(index => index + 1),
      1600 // every 1600ms
    )
    return () => clearTimeout(intervalId)
  }, [])

  return (
    // <div style={{backgroundColor: "red", width: "1000px"}}>
    <TextTransition
      text={TEXTS[index % TEXTS.length]}
      springConfig={presets.stiff}
      direction="up"
      inline={true}
      style={{
        fontStyle: "italic",
        minWidth: "5rem",
        fontSize: "1em",
        fontFamily: "monospace",
      }}
    />
    // </div>
  )
}

export default Transition
