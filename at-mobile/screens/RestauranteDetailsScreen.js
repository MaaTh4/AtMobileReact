import { View, Text, StyleSheet } from 'react-native';

export const mockRestaurants = [
  { id: 1, name: "Restaurante A", address: "Rua 1, Centro, Rio de Janeiro", specialty: "Feijoada" },
  { id: 2, name: "Restaurante B", address: "Rua 2, Centro, Rio de Janeiro", specialty: "Hamburguer" },
  { id: 3, name: "Restaurante C", address: "Rua 3, Centro, Rio de Janeiro", specialty: "Frango Grelhado" },
  { id: 4, name: "Restaurante D", address: "Rua 4, Centro, Rio de Janeiro", specialty: "Filé a Parmegiana" },
  { id: 5, name: "Restaurante E", address: "Rua 5, Centro, Rio de Janeiro", specialty: "Hamburguer" },
];

const RestauranteDetailsScreen = ({ route }) => {
  const { restaurantId } = route.params;

  // Busca o restaurante com base no ID
  const restaurant = mockRestaurants.find(item => item.id === restaurantId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.address}>{restaurant.address}</Text>
      <Text style={styles.specialty}>Especialidade da casa: {restaurant.specialty}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 18,
    color: '#777',
    marginTop: 10,
  },
  specialty: {
    fontSize: 18,
    color: '#333',
    marginTop: 10,
    fontStyle: 'italic',
  },
});

export default RestauranteDetailsScreen;
