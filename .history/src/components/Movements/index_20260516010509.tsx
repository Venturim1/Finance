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
    <TouchableOpacity 
      style={styles.container}
      onPress={ () => console.log('item', item.label, item.value) }
    >
      <View style={styles.content}>
        <Text style={styles.text}>{item.label}</Text>
        
      </View>
    </TouchableOpacity>
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
    marginTop: 2,
    marginBottom: 8,
  },

  text: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#871cfe',
    borderRadius: 50,
  },
  
});
