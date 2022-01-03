import React, { useEffect, useState, createContext } from "react"

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("")

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  //store theme in local storage when state updates
  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  //
  const onSelectTheme = theme => setTheme(theme)

  useEffect(() => {
    // Add listener to update styles
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", e =>
        e.matches ? setTheme("dark") : setTheme("light")
      )

    // Setup dark/light mode for the first time
    onSelectTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    )

    // check for local storage theme
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
    }

    // Remove listener
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {})
    }
  }, [])

  const value = {
    theme,
    setTheme,
    toggleTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
