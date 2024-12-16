import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../components/ThemeContext';

const ConfigScreen = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? '#121212' : '#ffffff' }]}>
      <Text style={[styles.text, { color: isDarkTheme ? '#ffffff' : '#000000' }]}>
        Tema atual: {isDarkTheme ? 'Escuro' : 'Claro'}
      </Text>
      <Button title="Alternar Tema" onPress={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default ConfigScreen;
