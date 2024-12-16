import React, { useState } from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useTheme } from '../components/ThemeContext'; // Certifique-se de que o ThemeContext está configurado corretamente
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import CarrinhoScreen from '../screens/CarrinhoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import PedidosScreen from '../screens/PedidosScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import MapScreen from '../screens/MapScreen';
import RestauranteDetailsScreen from '../screens/RestauranteDetailsScreen';
import ConfigsScreen from '../screens/ConfigScreen'; // Tela de configurações para tema

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isDarkTheme } = useTheme(); // Obtendo o estado do tema do contexto
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({ name: 'mat', email: 'mat@' });

  const products = {
    Lanches: [
      { id: '1', name: 'Hambúrguer', price: 24.99 },
      { id: '2', name: 'Cheeseburger', price: 18.99 },
      { id: '3', name: 'Hambúrguer Vegano', price: 30.50 },
    ],
    Bebidas: [
      { id: '4', name: 'Refrigerante', price: 8.99 },
      { id: '5', name: 'Suco Natural', price: 7.99 },
      { id: '6', name: 'Água', price: 5 },
    ],
    Sobremesas: [
      { id: '7', name: 'Pudim', price: 12.50 },
      { id: '8', name: 'Torta de Limão', price: 14.99 },
      { id: '9', name: 'Brownie', price: 9.99 },
    ],
    'Pratos Principais': [
      { id: '10', name: 'Filé à Parmegiana', price: 32.99 },
      { id: '11', name: 'Frango Grelhado', price: 25.99 },
      { id: '12', name: 'Feijoada', price: 29.99 },
    ],
    Acompanhamentos: [
      { id: '13', name: 'Batata Frita', price: 14.99 },
      { id: '14', name: 'Salada', price: 14.99 },
      { id: '15', name: 'Arroz e Feijão', price: 15.25 },
    ],
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Alterar o estado de autenticação
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const onConfirmOrder = (orderDetails) => {
    if (cart.length > 0) {
      setOrders((prevOrders) => [
        ...prevOrders,
        ...cart.map((item) => ({
          ...item,
          orderDate: new Date().toISOString(),
          address: orderDetails.address,
          paymentMethod: orderDetails.paymentMethod,
        })),
      ]);
      setCart([]); // Limpa o carrinho após o pedido ser feito
    }
  };

  const appTheme = isDarkTheme ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold', // Estilo do título do cabeçalho
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: isDarkTheme ? '#333' : '#f8f9fa',
          },
          headerTintColor: isDarkTheme ? '#fff' : '#000',
        }}
      >
        {/* Se não estiver autenticado, exibe a tela de login */}
        {!isAuthenticated ? (
          <Stack.Screen
            name="Login"
            children={(props) => (
              <LoginScreen {...props} onLogin={() => setIsAuthenticated(true)} />
            )}
          />
        ) : (
          <>
            {/* Se estiver autenticado, mostra as outras telas */}
            <Stack.Screen
              name="Home"
              options={({ navigation }) => ({
                title: 'Bem-vindo',
                headerLeft: () => (
                  <Button
                    title="Perfil"
                    onPress={() => navigation.navigate('Profile')}
                    color={isDarkTheme ? '#fff' : '#000'}
                  />
                ),
                headerRight: () => (
                  <Button
                    title="Carrinho"
                    onPress={() => navigation.navigate('Cart')}
                    color="#007BFF"
                  />
                ),
              })}
              children={(props) => <HomeScreen {...props} onLogout={handleLogout} />}
            />
            <Stack.Screen
              name="Products"
              children={(props) => (
                <ProductsScreen
                  {...props}
                  cart={cart}
                  addToCart={addToCart}
                  products={products}
                />
              )}
            />
            <Stack.Screen
              name="Cart"
              children={(props) => (
                <CarrinhoScreen {...props} cart={cart} removeFromCart={removeFromCart} />
              )}
            />
            <Stack.Screen
              name="Profile"
              children={(props) => (
                <ProfileScreen {...props} user={user} onLogout={handleLogout} />
              )}
            />
            <Stack.Screen
              name="Pedidos"
              children={(props) => <PedidosScreen {...props} orders={orders} />}
            />
            <Stack.Screen
              name="Checkout"
              children={(props) => (
                <CheckoutScreen
                  {...props}
                  cart={cart}
                  onConfirmOrder={onConfirmOrder}
                />
              )}
            />
            <Stack.Screen name="Mapa" component={MapScreen} />
            <Stack.Screen name="RestauranteDetalhes" component={RestauranteDetailsScreen} />
            <Stack.Screen name="Configurações" component={ConfigsScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
