import { AnimatePresence } from "framer-motion";
import "styles/globals.css";

import { ThemeProvider } from "context/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="bg" />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
