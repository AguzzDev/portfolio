import "styles/globals.css";

import { ThemeProvider } from "context/ThemeContext";
import { AnimatePresence } from "types/AnimatePresence";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="bg bg-opacity" />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
