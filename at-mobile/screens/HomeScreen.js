import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const categories = [
  { id: '1', name: 'Lanches', color: '#FF6347' },
  { id: '2', name: 'Bebidas', color: '#1E90FF' },
  { id: '3', name: 'Sobremesas', color: '#FFB6C1' },
  { id: '4', name: 'Pratos Principais', color: '#3CB371' },
  { id: '5', name: 'Acompanhamentos', color: '#FFD700' },
];

const HomeScreen = ({ navigation, onLogout }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryButton, { backgroundColor: item.color }]}
      onPress={() => navigation.navigate('Products', { category: item.name })}
    >
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Exibe os itens em 2 colunas
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.row} // Ajusta as colunas
      />
      <TouchableOpacity
        style={styles.pedidosButton}
        onPress={() => navigation.navigate('Pedidos')}
      >
        <Text style={styles.pedidosText}>Ver Pedidos</Text>
      </TouchableOpacity>
            <TouchableOpacity
        style={styles.mapButton}
        onPress={() => navigation.navigate('Mapa')}
      >
        <Text style={styles.mapButtonText}>Ver Mapa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 16,
  },
  row: {
    justifyContent: 'space-between', // Espaça os itens uniformemente
  },
  categoryButton: {
    flex: 1,
    margin: 8,
    height: Dimensions.get('window').width / 3, // Define altura proporcional à largura da tela
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4, // Sombra no Android
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pedidosButton: {
    backgroundColor: '#FF6347',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  pedidosText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mapButton: {
  backgroundColor: '#1E90FF',
  padding: 12,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 16,
},
mapButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},

});

export default HomeScreen;
