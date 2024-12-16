import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const ProductsScreen = ({ route, cart, addToCart, products }) => {
  const { category } = route.params; // Pegando a categoria da navegação

  // Filtrando os produtos com base na categoria
  const categoryProducts = products[category] || [];

  const renderProduct = ({ item }) => (
    <View style={styles.productItem}>
      <Text>{item.name}</Text>
      <Text>R${item.price}</Text>
      <Button title="Adicionar ao Carrinho" onPress={() => addToCart(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>

      {/* Exibe os produtos da categoria selecionada */}
      <FlatList
        data={categoryProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  productItem: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    marginBottom: 5,
    borderRadius: 8,
  },
});

export default ProductsScreen;
