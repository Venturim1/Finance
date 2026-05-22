import React from 'react';

import { 
  View, 
  Text, 
  StatusBar,
  TouchableOpacity 
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MotiView, MotiText } from 'moti';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

import styles from './styles';

export default function Head() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
    </View>
  );
}
