import React from 'react';

import { 
  View, 
  Text, 
  ScrollView, 
} from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { FlashList } from '@shopify/flash-list';

import styles from './styles';
import { Value } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';

const list = [
  { 
    id: 1, 
    label: 'Boleto conta luz', 
    value: 150.00, 
    date: '17/01/2024', 
    type: '0'
  },
]

export default function Home() {
  return ()
}