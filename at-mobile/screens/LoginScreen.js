import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = ({ navigation, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Estado para mensagem de erro

  const FIXED_EMAIL = 'mat@';
  const FIXED_PASSWORD = '1234';

  const handleLogin = () => {
    // Limpar mensagens de erro ao tentar login
    setErrorMessage('');

    if (email === FIXED_EMAIL && password === FIXED_PASSWORD) {
      onLogin(); 
      navigation.replace('Home');
    } else {
      // Exibir mensagem de erro se as credenciais estiverem incorretas
      setErrorMessage('Credenciais inválidas. Por favor, verifique seu e-mail e senha.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao InfnetFood</Text>

      {/* Exibindo a mensagem de erro, se houver */}
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF6347',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
});

export default LoginScreen;
