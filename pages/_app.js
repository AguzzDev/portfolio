import { AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import ReactGA from "react-ga4"

import DarkmodeProvider from "context/DarkmodeProvider"
import "styles/globals.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_REACTGA_ID)
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="bg" />
      <DarkmodeProvider>
        <Component {...pageProps} />
      </DarkmodeProvider>
    </AnimatePresence>
  )
}

export default MyApp
