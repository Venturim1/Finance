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
                type: "spring",
                duration: 800,
              }}
            >
              {item.type === 1 ? `R$ ${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(item.value)}` : `R$ -${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2}).format(item.value)}`}
            </MotiView>
          </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <MotiView 
              style={styles.skeleton}
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "timing" }}
            >

            </MotiView>
          </AnimatePresence>
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

  date: {
    color: '#c4c4c4',
    fontWeight: 'bold',
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  value: {
    fontSize: 16,
    color: '#00ff00',
    fontWeight: 'bold',
  },

  expense: {
    fontSize: 16,
    color: '#ff0000',
    fontWeight: 'bold',
  },

  skeleton: {
    minHeight: 16,
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: '#c4c4c4',
    borderRadius: 8,
  },
  
});
