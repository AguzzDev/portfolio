import "styles/globals.css";

import { ThemeProvider } from "context/ThemeContext";
import { AnimatePresence } from "types/AnimatePresence";

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
