import { ThemeProvider } from './components/ThemeContext';
import AppNavigator from './navigation/AppNavigator';;

export default function App() {
  return (
    <ThemeProvider>
     
      <AppNavigator />
    
    </ThemeProvider>
  );
}