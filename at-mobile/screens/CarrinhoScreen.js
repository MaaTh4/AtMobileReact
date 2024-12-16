import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const CarrinhoScreen = ({ cart, removeFromCart, navigation }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigation.navigate('Checkout', { cart }); // Passa o carrinho para a tela de checkout
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho</Text>
      {cart.length === 0 ? (
        <Text style={styles.emptyMessage}>Seu carrinho está vazio</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()} // Corrige a chave para garantir que seja uma string
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.itemInfo}>
                <Text style={styles.itemText}>
                  {item.name} - {item.quantity} x R$ {item.price.toFixed(2)}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeFromCart(item.id)}
              >
                <Text style={styles.removeButtonText}>Remover</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
        <Button
          title="Finalizar Pedido"
          onPress={handleCheckout}
          color="#28a745"
          disabled={cart.length === 0} // Desabilita o botão se o carrinho estiver vazio
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#495057',
  },
  removeButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#28a745',
  },
  emptyMessage: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CarrinhoScreen;
