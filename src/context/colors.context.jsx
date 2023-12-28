import { createContext, useState } from 'react';

export const ColorsContext = createContext({
  colors: {
    backgroundColor: "#ffffff",
    textColor: "#000000",
    titleColor: "#ffffff",
    bannerTextColor: "#ffffff"
  }
});

export const ColorsProvider = ({ children }) => {
  const [colors, setColors] = useState({
    backgroundColor: "#ffffff",
    textColor: "#000000",
    titleColor: "#ffffff",
    bannerTextColor: "#ffffff"
  });

  const value = { colors, setColors };

  return <ColorsContext.Provider value={value}>{children}</ColorsContext.Provider>;
};