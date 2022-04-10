import { parseCookies, setCookie } from "nookies"
import { useEffect, useState } from "react"

import DarkmodeContext from "./DarkmodeContext"

const DarkmodeProvider = ({ children }) => {
  const { colorTheme } = parseCookies()
  const [toogle, setToogle] = useState(false)
  const [theme, setTheme] = useState(null)

  const toogleDarkMode = () => {
    setToogle(!toogle)

    if (toogle) {
      setCookie(null, "colorTheme", "dark")
      document.documentElement.classList.add("dark")
      setTheme(document.documentElement.classList.value)
    } else {
      setCookie(null, "colorTheme", "light")
      document.documentElement.classList.remove("dark")
      setTheme(document.documentElement.classList.value)
    }
  }

  useEffect(() => {
    if (colorTheme === "dark") {
      document.documentElement.classList.add("dark")
      setTheme(document.documentElement.classList.value)
    }
    setTheme(document.documentElement.classList.value)
  }, [])

  return (
    <DarkmodeContext.Provider value={{ toogleDarkMode, theme }}>
      {children}
    </DarkmodeContext.Provider>
  )
}

export default DarkmodeProvider
