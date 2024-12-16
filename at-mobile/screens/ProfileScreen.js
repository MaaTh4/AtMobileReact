import { View, Text, StyleSheet, Button } from 'react-native';

const ProfileScreen = ({ user, onLogout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{user.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>
      <Button title="Sair" onPress={onLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  value: {
    fontSize: 18,
    color: '#333',
  },
});

export default ProfileScreen;
