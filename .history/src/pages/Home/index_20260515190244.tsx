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
import Movements from '../../components/Movements';

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

interface Account {
  id: number;
  label: string;
  email: string;
  balance: number;
}

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
          <FlashList
            data={list}
            keyExtractor={ (item) => item.id.toString() }
            horizontal={true}
            showsVerticalScrollIndicator={false}
            renderItem={ (item) => <Movements item={item} /> }
            ListEmptyComponent={ () => <Text>Nenhuma movimentação encontrada</Text> }
            // estimatedItemSize={200} 
          />
        </View>
      </ScrollView>
    </View>
  );
}

// fulano@gmail.com
// Entradas: 2500.00  Gastos: 320.00