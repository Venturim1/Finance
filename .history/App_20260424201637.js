import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { ScreenStack } from 'react-native-screens';
import Welcome from './src/pages/Welcome';
import SignIn from './src/pages/SignIn';
import Routes from './src/routes';

export default function App() {
  return (
    <View>
      {/* <NavigationContainer>
        <ScreenStack>
          <Routes />
        </ScreenStack>
      </NavigationContainer> */}
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
