import React, { useState } from 'react';

import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity 
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { MotiView, AnimatePresence, MotiText } from 'moti';

import type { Account } from '../../types';

export default function Movements( { item }: { item: Account } ) {
  const [showValue, setShowValue] = useState(false);

  const handleItemPressed = () => {
    setShowValue(!showValue);
  };

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={ () => handleItemPressed() }
    >
      <Text style={styles.date}>{item.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{item.label}</Text>

        {showValue ? (
          <AnimatePresence exitBeforeEnter>
            <MotiView 
              style={item.type === 1 ? styles.value : styles.expense}
              from={{
                translateX: 100,
              }}
              animate={{
                translateX: 0,
              }}
              transition={{
                type: "s"
              }}
        )}
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
