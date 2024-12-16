import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";

const mockRestaurants = [
  { id: 1, name: "Restaurante A", address: "Rua 1, Centro, Rio de Janeiro" },
  { id: 2, name: "Restaurante B", address: "Rua 2, Centro, Rio de Janeiro" },
  { id: 3, name: "Restaurante C", address: "Rua 3, Centro, Rio de Janeiro" },
  { id: 4, name: "Restaurante D", address: "Rua 4, Centro, Rio de Janeiro" },
  { id: 5, name: "Restaurante E", address: "Rua 5, Centro, Rio de Janeiro" },
];

const MapScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mapa de Restaurantes</Text>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Map_Rio_de_Janeiro.png",
        }}
        style={styles.map}
        resizeMode="contain"
      />
      <View style={styles.restaurantList}>
        {mockRestaurants.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.id}
            onPress={() => navigation.navigate('RestauranteDetalhes', { restaurantId: restaurant.id })} // Navegação para detalhes
            style={styles.restaurant}
          >
            <Text style={styles.restaurantName}>{restaurant.name}</Text>
            <Text style={styles.restaurantAddress}>{restaurant.address}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  map: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 15,
  },
  restaurantList: {
    marginTop: 10,
  },
  restaurant: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  restaurantAddress: {
    fontSize: 14,
    color: "#666",
  },
});

export default MapScreen;
