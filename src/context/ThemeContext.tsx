import React, { createContext, useState, useContext } from 'react';

import colors from '../theme/colors';

const lightTheme = {
  background: colors.opacity_black,
  headerBackground: colors.dark_purple,
  cardBackground: colors.opacity_white,
  cardBorder: colors.gray_200,
  itemBackground: colors.opacity_black,
  textPrimary: colors.black,
  textSecondary: colors.gray_400,
  titleColor: colors.dark_purple,
  titleBorder: colors.light_purple,
  movementBorder: colors.gray_200,
  skeletonColor: colors.gray_200,
};

const darkTheme = {
  background: colors.gray_900,
  headerBackground: colors.gray_800,
  cardBackground: colors.gray_800,
  cardBorder: colors.gray_700,
  itemBackground: colors.gray_700,
  textPrimary: colors.white,
  textSecondary: colors.gray_300,
  titleColor: colors.light_purple,
  titleBorder: colors.dark_purple,
  movementBorder: colors.gray_600,
  skeletonColor: colors.gray_600,
};

type Theme = typeof lightTheme;

type ThemeContextType = {
  isDark: boolean;
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  theme: lightTheme,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDark, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
