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
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#c4c4c4',
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
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
