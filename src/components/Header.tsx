import React from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';
import { useDarkTheme } from '../hooks/DarkTheme';

export function Header() {
  const { toggleDarkModeState, isDarkMode } = useDarkTheme();
  return (
    <View style={[styles.header, isDarkMode && styles.headerDark]}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
      <Switch
        value={isDarkMode}
        onValueChange={toggleDarkModeState}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    paddingHorizontal: 40,
    backgroundColor: '#273FAD',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerDark: {
    backgroundColor: '#151555',
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    paddingTop: 16,
    fontFamily: 'Poppins-Regular',

  }
});
