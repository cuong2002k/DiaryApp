import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screen/Login';
import Register from './Screen/Register';
import Home from './Screen/Home';
import DetailsDiary from './Screen/DetailsDiary';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import EditDiary from './Screen/EditDiary';
import CreateDiary from './Screen/CreateDiary';

export default function App() {
  return (
    <PaperProvider
      theme={MD3LightTheme}
    >
      <CreateDiary />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
