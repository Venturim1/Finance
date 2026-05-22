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
        animation="fadeInLeft"
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        style={styles.containerForm}
      >
        
      </Animatable.View>
    </View>
  );
}