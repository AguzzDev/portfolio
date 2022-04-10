import DarkmodeProvider from "context/DarkmodeProvider"
import { AnimatePresence } from "framer-motion"

import "styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="bg"/>
      <DarkmodeProvider>
        <Component {...pageProps} />
      </DarkmodeProvider>
    </AnimatePresence>
  )
}

export default MyApp
