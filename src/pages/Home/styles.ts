import { StyleSheet } from "react-native";

import colors from '../../theme/colors';

type Theme = {
  background: string;
  titleColor: string;
  titleBorder: string;
  textSecondary: string;
};

export function getStyles(theme: Theme) {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.background,
    },

    header: {
      marginTop: 0,
    },

    scrollArea: {
      marginTop: 80,
      color: theme.textSecondary,
    },

    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme.titleColor,
      margin: 14,
      marginTop: 16,
      marginBottom: 16,
      paddingBottom: 8,
      borderBottomWidth: 4,
      borderBottomColor: theme.titleBorder,
    },

    list: {
      marginStart: 14,
      marginEnd: 14,
    },
  });
}
