import React, { createContext, ReactNode, useContext, useState} from 'react';

interface DarkThemeContextData {
  isDarkMode: boolean;
  toggleDarkModeState: () => void;
}

interface DarkThemeProviderProps {
  children: ReactNode;
}

const DarkThemeContext = createContext({} as DarkThemeContextData);

export function DarkThemeProvider ({children}: DarkThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkModeState() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <DarkThemeContext.Provider value={{isDarkMode, toggleDarkModeState}}>
      {children}
    </DarkThemeContext.Provider>
  )
}

export const useDarkTheme = () => useContext(DarkThemeContext); 