import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity, 
} from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/logo.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Monitore e organize seus gastos de qualquer lugar!
        </Text>
        <Text style={styles.text}>Faça login para começar</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('press')}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

