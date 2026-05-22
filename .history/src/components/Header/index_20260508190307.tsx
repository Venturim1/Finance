import React from 'react';

import { 
  View, 
  Text, 
  StatusBar,
  TouchableOpacity 
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import styles from './styles';
import { Value } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';

const list = [
  { 
    id: 1, 
    label: 'Boleto conta luz', 
    value: 150.00, 
    date: '17/01/2024', 
    type: '0' // despesas
  },
  { 
    id: 2, 
    label: 'Boleto conta água', 
    value: 170.00, 
    date: '20/01/2024', 
    type: '0' // despesas
  },
  { 
    id: 3, 
    label: 'Pix Cliente X', 
    value: 2500.00, 
    date: '22/01/2024', 
    type: '1' // receitas / entradas
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
    </View>
  );
}

// fulano@gmail.com
// Entradas: 2500.00  Gastos: 320.00