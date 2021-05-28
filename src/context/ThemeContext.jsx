import React, { useState, createContext } from "react"

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  const value = {
    theme,
    setTheme,
    toggleTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
