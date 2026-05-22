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
        <Text style={styles.title}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe e-mail de acesso..."
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe senha de acesso..."
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={ () => console.log('press login') }
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonRegister}
          onPress={ () => console.log('press register') }
        >
          <Text style={styles.registerText}>
            Não possui uma conta? Registre-se...
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}