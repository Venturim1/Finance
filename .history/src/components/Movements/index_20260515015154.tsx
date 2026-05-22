import React from 'react';

import { 
  View, 
  Text, 
  StatusBar,
  StyleSheet,
  TouchableOpacity 
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MotiView, MotiText } from 'moti';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Movements({ item }) {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{ item.label }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d8b7ff',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  username: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },

  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44 / 2,
  },
});
