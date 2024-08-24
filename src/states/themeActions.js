import { createContext, useContext, useState, useEffect } from "react";

// Create the context
const ThemeContext = createContext();

// Create a provider component
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Default theme
  const [isLightTheme, setisLightTheme] = useState(false)

  // Apply the theme to the body element
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setisLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
