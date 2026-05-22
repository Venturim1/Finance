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
import type { Account } from '../../types';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Movements( { item }: { item: Account } ) {
  console.log('item', item.label, item.value);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.label}</Text>
      <TouchableOpacity activeOpacity={0.9} style={styles.button}>
        <Feather name="arrow-right" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4c4c4',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },

  text: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    height: 40,
    marginBottom: 12,
    paddingTop: 8,
  },

  button: {
    backgroundColor: '#871cfe',
    borderRadius: 50,
  },
  
});
