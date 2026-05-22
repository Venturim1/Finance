import React from 'react';

import { 
  View, 
  Text, 
  ScrollView, 
} from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { FlashList } from '@shopify/flash-list';

import styles from './styles';

import Header from '../../components/Header';

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

      <ScrollView 
        style={styles.scrollArea}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Últimas movimentações</Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text style={styles.listLabel}>Boleto conta luz</Text>
            <Text style={styles.listValue}>150.00</Text>
            <Text style={styles.listDate}>17/01/2024</Text>
          </View>

          <View style={styles.listItem}>
            <Text style={styles.listLabel}>Boleto conta água</Text>
            <Text style={styles.listValue}>170.00</Text>
            <Text style={styles.listDate}>20/01/2024</Text>
          </View>

          <View style={styles.listItem}>
            <Text style={styles.listLabel}>Pix Cliente X</Text>
            <Text style={styles.listValue}>2500.00</Text>
            <Text style={styles.listDate}>22/01/2024</Text>
          </View>

        <FlashList
          data={list}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
        />
    </View>
  );
}

// fulano@gmail.com
// Entradas: 2500.00  Gastos: 320.00