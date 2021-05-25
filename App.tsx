import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { DarkThemeProvider, useDarkTheme } from './src/hooks/DarkTheme';
import { Home } from './src/pages/Home';

export default function App() {
  const { isDarkMode } = useDarkTheme();
  return (
    <DarkThemeProvider>
        <StatusBar 
          backgroundColor="transparent" 
          translucent 
          barStyle="light-content" 
        />
        <Home />
    </DarkThemeProvider>
  );
}


