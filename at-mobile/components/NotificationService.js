// services/NotificationService.js
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

// Configuração das notificações (somente necessário no Android)
if (Platform.OS === 'android') {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
}

// Função para solicitar permissão para enviar notificações
export const requestNotificationPermissions = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') {
    alert('Permissão para notificações não concedida!');
    return;
  }
};

// Função para enviar notificações
export const sendOrderStatusNotification = async (status) => {
  const localNotification = {
    title: 'Status do Pedido',
    body: `Seu pedido está: ${status}`,
    data: { status },
  };

  // Agendar a notificação para ser disparada imediatamente
  await Notifications.scheduleNotificationAsync({
    content: localNotification,
    trigger: { seconds: 1 },
  });
};
