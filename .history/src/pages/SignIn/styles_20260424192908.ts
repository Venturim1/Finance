import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8b7ff',
  },

  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },

  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },

  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },

  title: {
    fontSize: 28,
    marginTop: 28,
  },

  input: {
    backgroundColor: '#871cfe',
    width: '100%',
    borderRadius: 8,
    height: 50,
    borderWidth: 1,
    borderColor: '#871cfe',
    marginTop: 12,
    paddingHorizontal: 12,
    fontSize: 18,
    color: '#871cfe',
  },

});

export default styles;
