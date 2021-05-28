import React, { useState, createContext } from "react"

export const ThemeContext = createContext(null)

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")

  const value = {
    theme,
    setTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
