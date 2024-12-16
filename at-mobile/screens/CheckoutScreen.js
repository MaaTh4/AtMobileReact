import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const CheckoutScreen = ({ navigation, route, onConfirmOrder }) => {
  const { cart } = route.params; // Recebendo o carrinho da tela anterior
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleConfirmOrder = () => {
    if (address && paymentMethod) {
      const order = {
        cart,
        address,
        paymentMethod,
        orderDate: new Date().toISOString(),
      };
      onConfirmOrder(order); // Passando os detalhes para a função de confirmação do pedido
      navigation.navigate('Pedidos'); // Redirecionando para a tela de pedidos
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Pedido</Text>
      <TextInput
        style={styles.input}
        placeholder="Endereço de entrega"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Método de pagamento"
        value={paymentMethod}
        onChangeText={setPaymentMethod}
      />
      <Button title="Confirmar Pedido" onPress={handleConfirmOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default CheckoutScreen;