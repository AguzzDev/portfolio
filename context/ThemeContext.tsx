import { parseCookies, setCookie, destroyCookie } from "nookies";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { ChildrenProp } from "types";

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

export const ThemeProvider = ({ children }: ChildrenProp) => {
  const { colorTheme } = parseCookies();
  const [theme, setTheme] = useState(null);

  const toggleTheme = () => {
    if (colorTheme === "light") {
      setCookie(null, "colorTheme", "dark");
      document.documentElement.classList.remove("light");
      setTheme(document.documentElement.classList.value);
    } else {
      setCookie(null, "colorTheme", "light");
      document.documentElement.classList.remove("dark");
      setTheme(document.documentElement.classList.value);
    }
  };

  useEffect(() => {
    if (!colorTheme) {
      setCookie(null, "colorTheme", "light");
    }
    document.documentElement.classList.add(colorTheme);
    setTheme(document.documentElement.classList.value);
  }, [colorTheme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme: colorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
