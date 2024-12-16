import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// Função simulada para gerar notificações para cada pedido
const generateNotifications = (orderId) => [
  `Pedido ${orderId}: Confirmado`,
  `Pedido ${orderId}: Em preparo`,
  `Pedido ${orderId}: Enviado`,
  `Pedido ${orderId}: Entregue`,
];

const PedidosScreen = ({ orders }) => {
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

  const handleShowNotifications = (orderId) => {
    if (selectedOrderId === orderId) {
      clearInterval(intervalId); 
      setNotifications([]); 
      setSelectedOrderId(null); 
    } else {
      setSelectedOrderId(orderId);
      setNotifications([]); 

      //notificacoes a cd 5seg
      const id = setInterval(() => {
        setNotifications((prevNotifications) => {
          const newNotifications = generateNotifications(orderId);
          if (prevNotifications.length < newNotifications.length) {
            return [...prevNotifications, newNotifications[prevNotifications.length]];
          } else {
            clearInterval(id);
            return prevNotifications;
          }
        });
      }, 4000); 

      setIntervalId(id); 
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemDetail}>Quantidade: {item.quantity}</Text>
      <Text style={styles.itemDetail}>Preço: R$ {(item.price * item.quantity).toFixed(2)}</Text>
      <Text style={styles.itemDetail}>Endereço: {item.address}</Text>
      <Text style={styles.itemDetail}>Método de pagamento: {item.paymentMethod}</Text>
      <Text style={styles.itemDetail}>
        Data do pedido: {new Date(item.orderDate).toLocaleString()}
      </Text>

      <TouchableOpacity
        style={styles.notificationButton}
        onPress={() => handleShowNotifications(item.id)}
      >
        <Text style={styles.notificationButtonText}>
          {selectedOrderId === item.id ? 'Ocultar Notificações' : 'Ver Notificações'}
        </Text>
      </TouchableOpacity>

      {selectedOrderId === item.id && (
        <View style={styles.notificationsContainer}>
          {notifications.map((notification, index) => (
            <Text key={index} style={styles.notificationText}>
              {notification}
            </Text>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Pedidos</Text>
      {orders.length === 0 ? (
        <Text style={styles.emptyMessage}>Você ainda não tem pedidos.</Text>
      ) : (
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
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
    textAlign: 'center',
    marginBottom: 20,
    color: '#343a40',
  },
  emptyMessage: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 10,
  },
  itemDetail: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 5,
  },
  notificationButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#FF6347',
    borderRadius: 5,
    alignItems: 'center',
  },
  notificationButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationsContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  notificationText: {
    fontSize: 14,
    color: '#495057',
    marginBottom: 5,
  },
});

export default PedidosScreen;
