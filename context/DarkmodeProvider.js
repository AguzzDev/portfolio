import { parseCookies, setCookie, destroyCookie } from "nookies"
import { useEffect, useState } from "react"

import DarkmodeContext from "./DarkmodeContext"

const DarkmodeProvider = ({ children }) => {
  const { colorTheme } = parseCookies()
  const [theme, setTheme] = useState(null)

  const toogleDarkMode = () => {
    if (colorTheme === "light") {
      setCookie(null, "colorTheme", "dark")
      document.documentElement.classList.remove("light")
      setTheme(document.documentElement.classList.value)
    } else {
      setCookie(null, "colorTheme", "light")
      document.documentElement.classList.remove("dark")
      setTheme(document.documentElement.classList.value)
    }
  }

  useEffect(() => {
    if (!colorTheme) {
      setCookie(null, "colorTheme", "light")
    }
    document.documentElement.classList.add(colorTheme)
    setTheme(document.documentElement.classList.value)
  }, [colorTheme])

  return (
    <DarkmodeContext.Provider value={{ toogleDarkMode, theme:colorTheme }}>
      {children}
    </DarkmodeContext.Provider>
  )
}

export default DarkmodeProvider
