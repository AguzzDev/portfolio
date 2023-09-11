import React, { useEffect, useState } from "react";

export const withScrollPosition = (WrappedComponent) => {
  return function ScrollPositionWrapper(props) {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
      if (window.scrollY > 2815) return;
      if (window.scrollY <= 250) return setScrollPosition(0);

      const itemIndex = Math.floor(scrollY / 165);
      if (itemIndex < props.projects.length - 1)
        return setScrollPosition(itemIndex);
      setScrollPosition(props.projects.length - 1);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <WrappedComponent scrollPosition={scrollPosition} {...props} />;
  };
};
