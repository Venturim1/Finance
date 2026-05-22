import React from 'react';

import { 
  View, 
  Text, 
  TextInput,
  TouchableOpacity, 
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import styles from './styles';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Animatable.View
        delay={500}
        animation="fadeInUp"
        style={styles.containerForm}
    </View>
  );
}