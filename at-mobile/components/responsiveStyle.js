import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const responsiveStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width > 600 ? 40 : 20, // Mais espaçamento para telas maiores
    backgroundColor: '#fff',
  },
  title: {
    fontSize: width > 600 ? 28 : 24, // Ajusta o tamanho do título
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  listText: {
    fontSize: width > 600 ? 18 : 16,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: width > 600 ? 20 : 15,
    backgroundColor: '#FF6347',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: width > 600 ? 18 : 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: width > 600 ? 15 : 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  cartText: {
    fontSize: width > 600 ? 16 : 14,
    color: '#333',
  },
  totalContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  totalText: {
    fontSize: width > 600 ? 22 : 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default responsiveStyles;
