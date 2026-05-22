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

export default function Header() {
  return (
    <View style={styles.container}>
      <MotiView
        style={styles.content}
        from={{
          translateY: -150,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          type: 'timing',
          duration: 1500,
          delay: 300,
        }}
      >
        <Header />
      </MotiView>
    </View>
  );
}
